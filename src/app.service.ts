import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CoreService } from './common/core.service';

@Injectable()
export class AppService {
  constructor(private readonly coreService: CoreService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async getDataFromPerco() {
    await this.coreService.getData();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async sendDataToServer() {
    await this.coreService.sentData();
  }
}
