import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './db/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync(dbConfig()),
    ConfigModule.forRoot({ isGlobal: true }),
    CommonModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
