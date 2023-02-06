import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodBank extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.bloodBank, {
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;
}
