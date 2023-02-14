import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { Donor } from '@/models/donors/entities/donor.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodGroup extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @OneToMany(() => BloodRequest, (bloodRequest) => bloodRequest.bloodGroup)
  bloodRequests: BloodRequest[];

  @OneToMany(() => Donor, (donor) => donor.bloodGroup)
  donors: Donor[];
}
