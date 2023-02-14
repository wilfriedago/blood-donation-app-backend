import { PartialType } from '@nestjs/swagger';

import { CreateQuestionnaireDto } from './create-questionnaire.dto';

export class UpdateQuestionnaireDto extends PartialType(
  CreateQuestionnaireDto,
) {}
