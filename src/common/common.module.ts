import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { XmlService } from './xml.service';
import { CoreService } from './core.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../db/entities/user.entity';
import { DataService } from './data.service';
import { ReportEntity } from '../db/entities/report.entity';

@Module({
  providers: [ApiService, XmlService, CoreService, DataService],
  exports: [CoreService],
  imports: [TypeOrmModule.forFeature([UserEntity, ReportEntity])],
})
export class CommonModule {}
