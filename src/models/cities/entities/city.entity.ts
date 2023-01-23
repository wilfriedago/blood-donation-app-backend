import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BloodBank } from '@/models/blood-banks/entities/blood-bank.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class City extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @OneToMany(() => Hospital, (hospital) => hospital.city)
  hospitals: Hospital[];

  @OneToMany(() => BloodBank, (bloodBank) => bloodBank.city)
  bloodBanks: BloodBank[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
