import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Hospital extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.hospital, {
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;

  @OneToMany(() => BloodRequest, (bloodRequest) => bloodRequest.hospital)
  bloodRequests: BloodRequest[];
}
