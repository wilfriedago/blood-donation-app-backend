import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly citiesRepository: Repository<City>,
  ) {}

  async create(createProfileDto: CreateCityDto): Promise<City> {
    return await this.citiesRepository.save(
      this.citiesRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[City[], number]> {
    const { page, limit } = paginationOptions;
    return await this.citiesRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<City>): Promise<City> {
    return await this.citiesRepository.findOne({
      where: fields,
    });
  }

  async update(id: number, updateProfileDto: UpdateCityDto): Promise<City> {
    return await this.citiesRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.citiesRepository.softDelete(id);
  }
}
