import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';
import { BloodRequestStatus } from '@/models/blood-request-statuses/entities/blood-request-status.entity';
import { BloodSupply } from '@/models/blood-supplies/entities/blood-supply.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodRequest extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Blood Request 1' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Blood Request 1 Description' })
  @Column({ nullable: true })
  description?: string | null;

  @ApiProperty({ example: 10 })
  @Column({ type: 'float' })
  quantityRequested: number;

  @OneToMany(() => BloodSupply, (bloodSupply) => bloodSupply.bloodRequest)
  bloodSupplies: BloodSupply[];

  @ManyToOne(() => BloodGroup, (bloodGroup) => bloodGroup.bloodRequests, {
    eager: true,
  })
  @JoinColumn()
  bloodGroup: BloodGroup;

  @ManyToOne(() => Hospital, (hospital) => hospital.bloodRequests, {
    eager: true,
  })
  @JoinColumn()
  hospital: Hospital;

  @ManyToOne(
    () => BloodRequestStatus,
    (bloodRequestStatus) => bloodRequestStatus.bloodRequests,
    {
      eager: true,
    },
  )
  @JoinColumn()
  bloodRequestStatus: BloodRequestStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
