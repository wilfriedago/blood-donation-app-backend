import { Module } from '@nestjs/common';

import { BloodBanksController } from './blood-banks.controller';
import { BloodBanksService } from './blood-banks.service';

@Module({
  controllers: [BloodBanksController],
  providers: [BloodBanksService],
})
export class BloodBanksModule {}
