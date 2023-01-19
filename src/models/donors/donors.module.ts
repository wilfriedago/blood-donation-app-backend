import { Module } from '@nestjs/common';

import { DonorsController } from './donors.controller';
import { DonorsService } from './donors.service';

@Module({
  controllers: [DonorsController],
  providers: [DonorsService],
})
export class DonorsModule {}
