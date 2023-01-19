import { Module } from '@nestjs/common';

import { BloodRequestsController } from './blood-requests.controller';
import { BloodRequestsService } from './blood-requests.service';

@Module({
  controllers: [BloodRequestsController],
  providers: [BloodRequestsService],
})
export class BloodRequestsModule {}
