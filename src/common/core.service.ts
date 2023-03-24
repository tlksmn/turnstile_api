import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiT } from '../types/api.type';
import { DataService } from './data.service';

@Injectable()
export class CoreService {
  constructor(
    private readonly apiService: ApiService,
    private readonly dataService: DataService,
  ) {}

  async getData() {
    const events: ApiT = await this.apiService.fetchFrom();
    const temp = await this.dataService.saveData(events);
    console.log(temp.length);
  }

  async sentData() {
    const data = await this.dataService.getDate();
    const xml = this.apiService.fetchTo(data);
    console.log(data.length);
    await this.dataService.update(data);
    console.log(xml.length);
  }
}
