import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Answer } from '@/models/answers/entities/answer.entity';

import { AnswerSeedService } from './answer-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Answer])],
  providers: [AnswerSeedService],
  exports: [AnswerSeedService],
})
export class AnswerSeedModule {}
