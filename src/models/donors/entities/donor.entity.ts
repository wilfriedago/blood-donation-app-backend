import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BloodDonation } from '@/models/blood-donations/entities/blood-donation.entity';
import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';
import { DonorCard } from '@/models/donor-cards/entities/donor-card.entity';
import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Donor extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John' })
  @Index()
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @Index()
  @Column()
  lastName: string;

  @ApiProperty({ example: '1990-01-01' })
  @Column({ nullable: true })
  birthdate?: Date;

  @ApiProperty({ example: 'M' })
  @Column({ nullable: true })
  gender?: string;

  @ApiProperty({ example: 60 })
  @Column({ nullable: true, type: 'float' })
  weight?: number;

  @OneToOne(() => User, (user) => user.donor, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => BloodGroup, (bloodGroup) => bloodGroup.donors, {
    eager: true,
  })
  @JoinColumn()
  bloodGroup: BloodGroup;

  @OneToOne(() => DonorCard, (donorCard) => donorCard.donor, {
    onDelete: 'CASCADE',
  })
  donorCard: DonorCard;

  @OneToMany(() => BloodDonation, (bloodDonation) => bloodDonation.donor)
  bloodDonations: BloodDonation[];
}
