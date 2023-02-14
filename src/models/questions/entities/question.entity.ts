import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { QuestionAnswer } from '@/models/question-answers/entities/question-answer.entity';
import { Questionnaire } from '@/models/questionnaires/entities/questionnaire.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class Question extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column({ nullable: true })
  description?: string | null;

  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
  @JoinColumn()
  questionnaire: Questionnaire;

  @OneToMany(() => QuestionAnswer, (questionAnswer) => questionAnswer.question)
  questionAnswers: QuestionAnswer[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
