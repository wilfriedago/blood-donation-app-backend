import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { City } from '@/models/cities/entities/city.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Country extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Pays 1' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Description pays 1' })
  @Column({ nullable: true })
  description?: string | null;

  @OneToMany(() => City, (city) => city.country, {
    eager: true,
    onDelete: 'CASCADE',
  })
  cities: City[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
