import { Injectable, Logger } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiT } from '../types/api.type';
import { DataService } from './data.service';
import { XmlService } from './xml.service';

@Injectable()
export class CoreService {
  constructor(
    private readonly apiService: ApiService,
    private readonly dataService: DataService,
    private readonly xmlService: XmlService,
  ) {}

  async getData() {
    try {
      const events: ApiT = await this.apiService.fetchFrom();
      Logger.log('получено ', events.records, ' данных');
      const temp = await this.dataService.saveData(events);
      Logger.log('сохранено ', temp.length);
    } catch (e) {
      Logger.log(e);
      Logger.log('ошибка во время получения данных');
    }
  }

  async sentData() {
    const data = await this.dataService.getDate();
    if (data.length === 0) {
      Logger.log('нет записей в базе данных');
      return null;
    }
    Logger.log(data.length, ' записей было получено для xml');
    const xml = this.xmlService.generate(data);
    try {
      const request = await this.apiService.fetchTo(xml);
      Logger.log(request);
      await this.dataService.update(data);
    } catch (e) {
      Logger.log(e);
      Logger.log('ошибка во время отправки данных в eqizmet');
    }
  }
}
