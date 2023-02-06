import {
  AfterInsert,
  AfterRemove,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Question extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  type: string;

  @Column()
  order: number;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  options?: string | null;

  @Column({ nullable: true })
  answer?: string | null;

  @Column({ nullable: true })
  is_active?: boolean | null;

  @AfterInsert()
  setActive() {
    this.is_active = true;
  }

  @Column({ nullable: true })
  is_deleted?: boolean | null;

  @AfterRemove()
  setDeleted() {
    this.is_active = false;
    this.is_deleted = true;
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
