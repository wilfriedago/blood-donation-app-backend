import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';
import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { Donor } from '@/models/donors/entities/donor.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodDonation extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  amount: number;

  @Column()
  date: Date;

  @OneToOne(() => Donor, (donor) => donor.bloodDonations)
  donor: Donor;

  @OneToOne(() => BloodGroup, (bloodGroup) => bloodGroup.bloodDonations)
  bloodGroup: BloodGroup;

  @OneToOne(() => BloodRequest, (bloodRequest) => bloodRequest.bloodDonations)
  bloodRequest: BloodRequest;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
