import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ReportEntity } from '../db/entities/report.entity';
import * as moment from 'moment';

@Injectable()
export class XmlService {
  constructor(private readonly configService: ConfigService) {}
  //ИИН персоны             &iin
  //RFID метка              &RFID
  //Между ИИН и RFID есть условная обязательность. Обязательно должно быть заполнено один из двух.

  //Код персоны             &code
  //Вход (1) или Выход (0)  &eventCode
  //Дата и время события    &time
  //BIN                     &БИНы госорганов, расположеные в здании
  //gateNumber              &Номер входа(турникета)
  //floorNumber             &Номер этажа
  //Наименование здания     &buildingName
  generate(payload: ReportEntity[]) {
    const bins = this.configService
      .get<string>('BINS_ARR')
      .split(',')
      .map((e) => `<BIN>${e}</BIN>`)
      .join('');
    const buildName = `<buildingName>${this.configService.get(
      'BUILDING_NAME',
    )}</buildingName>`;
    const floorNumber = `<floorNumber>${this.configService.get(
      'FLOOR_NUMBER',
    )}</floorNumber>`;
    const header = `<?xml version="1.0" encoding="utf-8"?><Request xsi:noNamespaceSchemaLocation="schema.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">`;
    const acc: string[] = [];
    for (const report of payload) {
      acc.push(
        `<iin>${report.user.iin}</iin>` +
          `<code>${report.user.codeCard}</code>` +
          `<eventCode>${report.user.eventCode}</eventCode>` +
          `<time>${moment(report.user.time).format(
            'YYYY-MM-DD hh-mm-ss',
          )}</time>` +
          bins +
          `<gateNumber>${report.user.turnstileId}</gateNumber>` +
          floorNumber +
          buildName,
      );
    }
    return header.concat(acc.join(''), `</Request>`).trim();
  }
}
