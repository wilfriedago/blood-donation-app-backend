import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { City } from '@/models/cities/entities/city.entity';
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

  @Column({ nullable: true })
  address?: string | null;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.donor, { onDelete: 'CASCADE' })
  user: User;

  @JoinColumn()
  @OneToOne(() => City, (city: City) => city.hospitals)
  city: City;

  @OneToMany(() => BloodRequest, (bloodRequest) => bloodRequest.hospital)
  bloodRequests: BloodRequest[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
