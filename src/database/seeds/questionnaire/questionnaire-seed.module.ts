import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Questionnaire } from '@/models/questionnaires/entities/questionnaire.entity';

import { QuestionnaireSeedService } from './questionnaire-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire])],
  providers: [QuestionnaireSeedService],
  exports: [QuestionnaireSeedService],
})
export class QuestionnaireSeedModule {}
