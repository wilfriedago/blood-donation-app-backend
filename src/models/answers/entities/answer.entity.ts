import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { QuestionAnswer } from '@/models/question-answers/entities/question-answer.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Answer extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @OneToMany(() => QuestionAnswer, (questionAnswer) => questionAnswer.answer)
  questionAnswers: QuestionAnswer[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
