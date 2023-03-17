import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CoreService } from './common/core.service';

@Injectable()
export class AppService {
  constructor(private readonly coreService: CoreService) {}
  @Cron(CronExpression.EVERY_MINUTE)
  getDataFromPerco() {
    console.log('should fetch data from perco', new Date().toISOString());
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  sendDataToServer() {
    console.log('should send data to server', new Date().toISOString());
  }
}
