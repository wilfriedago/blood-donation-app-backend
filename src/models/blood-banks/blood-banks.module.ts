import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { BloodBanksController } from './blood-banks.controller';
import { BloodBanksService } from './blood-banks.service';
import { BloodBank } from './entities/blood-bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodBank])],
  controllers: [BloodBanksController],
  providers: [BloodBanksService, IsExist, IsNotExist],
  exports: [BloodBanksService],
})
export class BloodBanksModule {}
