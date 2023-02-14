import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { BloodSuppliesController } from './blood-supplies.controller';
import { BloodSuppliesService } from './blood-supplies.service';
import { BloodSupply } from './entities/blood-supply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodSupply])],
  controllers: [BloodSuppliesController],
  providers: [BloodSuppliesService, IsExist, IsNotExist],
  exports: [BloodSuppliesService],
})
export class BloodSuppliesModule {}
