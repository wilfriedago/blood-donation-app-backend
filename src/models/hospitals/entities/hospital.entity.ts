import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { BloodSupply } from '@/models/blood-supplies/entities/blood-supply.entity';
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

  @OneToOne(() => User, (user) => user.hospital, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => BloodRequest, (bloodRequest) => bloodRequest.hospital)
  bloodRequests: BloodRequest[];

  @OneToMany(() => BloodSupply, (bloodSupply) => bloodSupply.hospital)
  bloodSupplies: BloodSupply[];
}
