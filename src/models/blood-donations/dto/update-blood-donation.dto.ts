import { PartialType } from '@nestjs/swagger';

import { CreateBloodDonationDto } from './create-blood-donation.dto';

export class UpdateBloodDonationDto extends PartialType(
  CreateBloodDonationDto,
) {}
