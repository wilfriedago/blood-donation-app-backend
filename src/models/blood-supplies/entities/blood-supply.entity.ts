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

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodSupply extends EntityHelper {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Blood Supply 1' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Blood Supply 1 Description' })
  @Column({ nullable: true })
  description?: string | null;

  @ApiProperty({ example: 10 })
  @Column({ type: 'float' })
  quantitySupplied: number;

  @ApiProperty({ example: 10 })
  @JoinColumn()
  @ManyToOne(() => BloodRequest, (bloodRequest) => bloodRequest.bloodSupplies, {
    eager: true,
  })
  bloodRequest: BloodRequest;

  @ApiProperty({ example: 5 })
  @JoinColumn()
  @ManyToOne(() => Hospital, (hospital) => hospital.bloodSupplies, {
    eager: true,
  })
  hospital: Hospital;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
