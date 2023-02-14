import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BloodBank } from '@/models/blood-banks/entities/blood-bank.entity';

import { BloodBankSeedService } from './blood-bank-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([BloodBank])],
  providers: [BloodBankSeedService],
  exports: [BloodBankSeedService],
})
export class BloodBankSeedModule {}
