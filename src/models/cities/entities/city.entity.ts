import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class City extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @OneToMany(() => User, (user) => user.city)
  users: User[];
}
