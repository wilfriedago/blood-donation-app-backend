import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Donor } from '@/models/donors/entities/donor.entity';

import { DonorSeedService } from './donor-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Donor])],
  providers: [DonorSeedService],
  exports: [DonorSeedService],
})
export class DonorSeedModule {}
