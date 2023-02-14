import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Hospital } from '@/models/hospitals/entities/hospital.entity';

import { HospitalSeedService } from './hospital-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])],
  providers: [HospitalSeedService],
  exports: [HospitalSeedService],
})
export class HospitalSeedModule {}
