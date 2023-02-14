import { Module } from '@nestjs/common';

import { QuestionAnswersController } from './question-answers.controller';
import { QuestionAnswersService } from './question-answers.service';

@Module({
  controllers: [QuestionAnswersController],
  providers: [QuestionAnswersService],
})
export class QuestionAnswersModule {}
