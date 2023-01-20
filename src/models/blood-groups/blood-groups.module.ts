import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { BloodGroupsController } from './blood-groups.controller';
import { BloodGroupsService } from './blood-groups.service';
import { BloodGroup } from './entities/blood-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodGroup])],
  controllers: [BloodGroupsController],
  providers: [BloodGroupsService, IsExist, IsNotExist],
  exports: [BloodGroupsService],
})
export class BloodGroupsModule {}
