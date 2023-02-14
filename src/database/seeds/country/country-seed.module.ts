import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Country } from '@/models/countries/entities/country.entity';

import { CountrySeedService } from './country-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountrySeedService],
  exports: [CountrySeedService],
})
export class CountrySeedModule {}
