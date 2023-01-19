import { PartialType } from '@nestjs/swagger';

import { CreateBloodRequestDto } from './create-blood-request.dto';

export class UpdateBloodRequestDto extends PartialType(CreateBloodRequestDto) {}
