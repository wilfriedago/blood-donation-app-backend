import { Module } from '@nestjs/common';

import { BloodDonationsController } from './blood-donations.controller';
import { BloodDonationsService } from './blood-donations.service';

@Module({
  controllers: [BloodDonationsController],
  providers: [BloodDonationsService],
})
export class BloodDonationsModule {}
