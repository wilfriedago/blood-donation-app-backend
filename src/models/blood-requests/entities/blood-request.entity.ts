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

import { BloodDonation } from '@/models/blood-donations/entities/blood-donation.entity';
import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class BloodRequest extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ type: 'float' })
  amount: number;

  @JoinColumn()
  @OneToOne(() => BloodGroup, (bloodGroup) => bloodGroup.bloodRequests)
  bloodGroup: BloodGroup;

  @JoinColumn()
  @OneToOne(() => Hospital, (hospital) => hospital.bloodRequests)
  hospital: Hospital;

  @JoinColumn()
  @OneToMany(() => BloodDonation, (bloodDonation) => bloodDonation.bloodRequest)
  bloodDonations: BloodDonation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
