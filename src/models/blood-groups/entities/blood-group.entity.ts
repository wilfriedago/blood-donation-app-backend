import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BloodDonation } from '@/models/blood-donations/entities/blood-donation.entity';
import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { Donor } from '@/models/donors/entities/donor.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodGroup extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  description: string | null;

  @OneToMany(() => BloodDonation, (bloodDonation) => bloodDonation.bloodGroup)
  bloodDonations: BloodDonation[];

  @JoinColumn()
  @OneToMany(() => BloodGroup, (bloodGroup) => bloodGroup.compatibleBloodGroups)
  compatibleBloodGroups: BloodGroup[];

  @OneToOne(() => Donor, (donor) => donor.bloodGroup)
  donor: Donor;

  @OneToMany(() => BloodRequest, (bloodRequest) => bloodRequest.bloodGroup)
  bloodRequests: BloodRequest[];
}
