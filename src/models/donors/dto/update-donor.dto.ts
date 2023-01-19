import { PartialType } from '@nestjs/swagger';

import { CreateDonorDto } from './create-donor.dto';

export class UpdateDonorDto extends PartialType(CreateDonorDto) {}
