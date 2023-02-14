import { PartialType } from '@nestjs/swagger';
import { CreateDonorCardDto } from './create-donor-card.dto';

export class UpdateDonorCardDto extends PartialType(CreateDonorCardDto) {}
