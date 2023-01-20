import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { BloodDonationsController } from './blood-donations.controller';
import { BloodDonationsService } from './blood-donations.service';
import { BloodDonation } from './entities/blood-donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodDonation])],
  controllers: [BloodDonationsController],
  providers: [BloodDonationsService, IsExist, IsNotExist],
  exports: [BloodDonationsService],
})
export class BloodDonationsModule {}
