import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { City } from '@/models/cities/entities/city.entity';

import { CitySeedService } from './city-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CitySeedService],
  exports: [CitySeedService],
})
export class CitySeedModule {}
