import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { BloodRequestsController } from './blood-requests.controller';
import { BloodRequestsService } from './blood-requests.service';
import { BloodRequest } from './entities/blood-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodRequest])],
  controllers: [BloodRequestsController],
  providers: [BloodRequestsService, IsExist, IsNotExist],
  exports: [BloodRequestsService],
})
export class BloodRequestsModule {}
