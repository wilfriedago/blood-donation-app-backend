import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Donor } from '@/models/donors/entities/donor.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodDonation extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 10 })
  @Column({ type: 'float' })
  quantityDonated: number;

  @ManyToOne(() => Donor, (donor) => donor.bloodDonations, {
    eager: true,
  })
  @JoinColumn()
  donor: Donor;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
