import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Donor } from '@/models/donors/entities/donor.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class DonorCard extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Donor Card 1' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Donor Card 1 Description' })
  @Column({ nullable: true })
  description?: string | null;

  @OneToOne(() => Donor, (donor) => donor.donorCard, {
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
