import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  @Cron(CronExpression.EVERY_30_SECONDS)
  someJob() {
    console.log('job start here', new Date().toISOString());
  }
}
