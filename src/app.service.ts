import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CoreService } from './common/core.service';

@Injectable()
export class AppService {
  constructor(private readonly coreService: CoreService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async getDataFromPerco() {
    await this.coreService.getData();
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async sendDataToServer() {
    await this.coreService.sentData();
  }
}
