import { PartialType } from '@nestjs/swagger';

import { CreateBloodGroupDto } from './create-blood-group.dto';

export class UpdateBloodGroupDto extends PartialType(CreateBloodGroupDto) {}
