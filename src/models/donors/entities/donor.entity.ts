import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BloodDonation } from '@/models/blood-donations/entities/blood-donation.entity';
import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';
import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Donor extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  firstName: string;

  @Index()
  @Column()
  lastName: string;

  @Column({ nullable: true })
  birthdate?: Date;

  @Column({ nullable: true })
  gender?: string;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.donor, {
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;

  @OneToOne(() => BloodGroup, (bloodGroup) => bloodGroup.donor, {
    eager: true,
  })
  @JoinColumn()
  bloodGroup: BloodGroup;

  @OneToMany(() => BloodDonation, (bloodDonation) => bloodDonation.donor)
  bloodDonations: BloodDonation[];
}
