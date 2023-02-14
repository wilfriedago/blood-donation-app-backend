import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodRequestStatus extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryColumn()
  id: number;

  @Allow()
  @ApiProperty({ example: 'pending' })
  @Column()
  value?: string;

  @OneToMany(
    () => BloodRequest,
    (bloodRequest) => bloodRequest.bloodRequestStatus,
  )
  bloodRequests: BloodRequest[];
}
