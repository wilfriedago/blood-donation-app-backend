import { Max, Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Answer } from '@/models/answers/entities/answer.entity';
import { Question } from '@/models/questions/entities/question.entity';
import { User } from '@/models/users/entities/user.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class QuestionAnswer extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Min(0)
  @Max(100)
  @Column()
  score: number;

  @Column({ nullable: true })
  justification: string;

  @ManyToOne(() => Question, (question) => question.questionAnswers, {
    eager: true,
  })
  @JoinColumn()
  question: Question;

  @ManyToOne(() => Answer, (answer) => answer.questionAnswers, {
    eager: true,
  })
  @JoinColumn()
  answer: Answer;

  @ManyToOne(() => User, (user) => user.questionAnswers, {
    eager: true,
  })
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
