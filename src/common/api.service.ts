import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
  private readonly apiURL: string;
  private readonly token: string;
  constructor(private readonly configService: ConfigService) {
    this.apiURL = configService.get('API_URL');
    this.token = configService.get('PERCO_TOKEN');
  }

  fetchFrom() {
    return fetch(
      this.apiURL +
        '/eventsystem?beginDatetime=2019-03-17 2023:59:59&endDatetime=2023-03-17 2023:59:59&cols=icon_information,event_name,time_label,time_label_utc,res_name,ip_address,device_name,fio,identifier,zone_exit,zone_enter,user_name,category,subcategory,segment_name&sidx=id&page=1&rows=100&filters={"type":"and","rows":[{"column":"event","value":17}]}',
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      },
    );
  }

  fetchTo() {}
}

//https://ru.percoweb.com/api/eventsystem?
//page=6&rows=20&sord=desc&sidx=id&
//cols=icon_information,event_name,time_label,time_label_utc,res_name,ip_address,device_name,fio,identifier,zone_exit,zone_enter,user_name,category,subcategory,segment_name&
//beginDatetime=2021-07-01 00:00:00&
//endDatetime=2021-09-30 23:59:59&
//filters={"type":"and","rows":[{"column":"event","value":17}]}
