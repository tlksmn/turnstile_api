import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AEntity } from './a.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'report' })
export class ReportEntity extends AEntity {
  @Column()
  delivered: boolean;

  @OneToOne(() => UserEntity, (user) => user.report)
  @JoinColumn()
  user: UserEntity;
}
