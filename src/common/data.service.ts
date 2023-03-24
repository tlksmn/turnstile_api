import { Injectable } from '@nestjs/common';
import { EventList, UserEntity } from '../db/entities/user.entity';
import { MoreThan, Repository } from 'typeorm';
import { ApiT } from '../types/api.type';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntity } from '../db/entities/report.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ReportEntity)
    private readonly reportRepository: Repository<ReportEntity>,
  ) {}

  async saveData(payload: ApiT) {
    const acc: UserEntity[] = [];
    for (const event of payload.rows) {
      try {
        const report = await this.reportRepository.save({ delivered: false });
        const user = this.userRepository.create({
          iin: +event.tabel_number || Math.floor(Math.random() * 10000000),
          fio: event.fio,
          codeCard: event.identifier,
          eventCode:
            event.zone_exit_id === 1 ? EventList.getOut : EventList.comeIn,
          time: new Date(event.time_label),
          turnstileId: event.device_id,
          report: report,
        });
        acc.push(user);
      } catch (e) {
        console.log(e);
      }
    }
    return this.userRepository.save(acc);
  }

  getDate() {
    return this.reportRepository.find({
      where: { delivered: false, user: { id: MoreThan(0) } },
      relations: { user: true },
    });
  }

  async update(payload: ReportEntity[]) {
    for (const report of payload) {
      report.delivered = true;
    }
    await this.reportRepository.save(payload);
  }
}
