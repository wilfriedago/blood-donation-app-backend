import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { Donor } from './entities/donor.entity';

@Injectable()
export class DonorsService {
  constructor(
    @InjectRepository(Donor)
    private readonly donorsRepository: Repository<Donor>,
  ) {}

  async create(createProfileDto: CreateDonorDto): Promise<Donor> {
    return await this.donorsRepository.save(
      this.donorsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<Donor[]> {
    const { page, limit } = paginationOptions;
    return await this.donorsRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(fields: EntityCondition<Donor>): Promise<Donor> {
    return await this.donorsRepository.findOne({
      where: fields,
    });
  }

  async update(id: number, updateProfileDto: UpdateDonorDto): Promise<Donor> {
    return await this.donorsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.donorsRepository.softDelete(id);
  }
}
