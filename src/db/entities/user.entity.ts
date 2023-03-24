import { Column, Entity, OneToOne } from 'typeorm';
import { AEntity } from './a.entity';
import { ReportEntity } from './report.entity';

export enum EventList {
  getOut,
  comeIn,
}
@Entity({ name: 'user' })
export class UserEntity extends AEntity {
  @Column({ nullable: true })
  iin: number;

  @Column({ nullable: true })
  codeCard: string;

  @Column()
  fio: string;

  @Column({ type: 'enum', enum: EventList })
  eventCode: EventList;

  @Column()
  turnstileId: number;

  @Column()
  time: Date;

  @OneToOne(() => ReportEntity, (report) => report.user)
  report: ReportEntity;
}
