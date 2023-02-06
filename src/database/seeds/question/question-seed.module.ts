import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Question } from '@/models/questions/entities/question.entity';

import { QuestionSeedService } from './question-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionSeedService],
  exports: [QuestionSeedService],
})
export class QuestionSeedModule {}
