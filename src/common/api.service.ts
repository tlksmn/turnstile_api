import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as moment from 'moment';
import { ApiT } from '../types/api.type';

@Injectable()
export class ApiService {
  private readonly apiURL: string;
  private readonly token: string;
  private readonly eqizmetURL: string;

  constructor(private readonly configService: ConfigService) {
    this.apiURL = configService.get('API_URL');
    this.token = configService.get('PERCO_TOKEN');
    this.eqizmetURL = configService.get('EQIZMET_URL');
  }

  async fetchFrom() {
    const dateFromF = new Date();
    const dateToF = new Date(dateFromF).setMonth(dateFromF.getMinutes() - 1);
    const dateFrom = moment(dateFromF).format('YYYY-MM-DD hh-mm-ss').trim();
    const dateTo = moment(dateToF).format('YYYY-MM-DD hh-mm-ss').trim();

    const request = await fetch(
      this.apiURL +
        `/eventsystem?beginDatetime=${dateFrom}&endDatetime=${dateTo}&cols=icon_information,ip_address,fio,device,identifier,zone_exit,zone_enter,user_name,segment_name&sidx=id&page=1&rows=500&filters={"type":"and","rows":[{"column":"event","value":17}]}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      },
    );
    if (request.status > 299) {
      throw new HttpException(request.statusText, request.status);
    }
    return JSON.parse(await request.text()) as unknown as ApiT;
  }

  fetchTo(xml: string) {
    return fetch('');
  }
}

//https://ru.percoweb.com/api/eventsystem?
//page=6&rows=20&sord=desc&sidx=id&
//cols=icon_information,event_name,time_label,time_label_utc,res_name,ip_address,device_name,fio,identifier,zone_exit,zone_enter,user_name,category,subcategory,segment_name&
//beginDatetime=2021-07-01 00:00:00&
//endDatetime=2021-09-30 23:59:59&
//filters={"type":"and","rows":[{"column":"event","value":17}]}
