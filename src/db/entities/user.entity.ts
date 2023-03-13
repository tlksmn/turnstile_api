import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReportEntity } from './report.entity';
enum EventList {
  getOut,
  comeIn,
}
@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  iin: number;

  @Column()
  personCode: number;

  @Column()
  rfId: number;

  @Column({ type: 'enum', enum: EventList })
  eventCode: EventList;

  @Column()
  bins: number;

  @Column()
  buildingName: string;

  @Column()
  gateNumber: number;

  @Column()
  floorNumber: number;

  @OneToOne(() => ReportEntity)
  @JoinColumn()
  report: ReportEntity;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated: Date;
}
