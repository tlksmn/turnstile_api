import { Injectable } from '@nestjs/common';
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
    const events: ApiT = await this.apiService.fetchFrom();
    const temp = await this.dataService.saveData(events);
    console.log(temp.length);
  }

  async sentData() {
    const data = await this.dataService.getDate();
    const xml = this.xmlService.generate(data);
    try {
      const request = await this.apiService.fetchTo(xml);
      console.log(request);
      await this.dataService.update(data);
    } catch (e) {
      console.log(e);
    }
    console.log(xml.length);
  }
}
