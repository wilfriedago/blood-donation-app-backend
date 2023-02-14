import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { Question } from '../questions/entities/question.entity';
import { Questionnaire } from './entities/questionnaire.entity';
import { QuestionnairesController } from './questionnaires.controller';
import { QuestionnairesService } from './questionnaires.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Questionnaire]),
    TypeOrmModule.forFeature([Question]),
  ],
  controllers: [QuestionnairesController],
  providers: [QuestionnairesService, IsExist, IsNotExist],
  exports: [QuestionnairesService],
})
export class QuestionnairesModule {}
