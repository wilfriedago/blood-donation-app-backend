import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';

import { BloodGroupSeedService } from './blood-group-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([BloodGroup])],
  providers: [BloodGroupSeedService],
  exports: [BloodGroupSeedService],
})
export class BloodGroupSeedModule {}
