import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';
import { XmlService } from './xml.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../db/entities/user.entity';
import { Repository } from 'typeorm';
import { ReportEntity } from '../db/entities/report.entity';

@Injectable()
export class CoreService {
  constructor(
    private readonly apiService: ApiService,
    private readonly xmlService: XmlService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ReportEntity)
    private readonly reportRepository: Repository<ReportEntity>,
  ) {}

  getData() {
    return this.apiService.fetchFrom();
    //save data in db and make report to him
  }

  sentData() {
    return this.apiService.fetchTo();
    //get data from db and change report status
  }
}
