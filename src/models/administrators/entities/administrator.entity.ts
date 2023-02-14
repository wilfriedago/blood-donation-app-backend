import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Administrator extends EntityHelper {
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
  })
  user: User;
}
