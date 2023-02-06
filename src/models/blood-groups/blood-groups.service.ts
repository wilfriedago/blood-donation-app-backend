import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateBloodGroupDto } from './dto/create-blood-group.dto';
import { UpdateBloodGroupDto } from './dto/update-blood-group.dto';
import { BloodGroup } from './entities/blood-group.entity';

@Injectable()
export class BloodGroupsService {
  constructor(
    @InjectRepository(BloodGroup)
    private readonly bloodGroupsRepository: Repository<BloodGroup>,
  ) {}

  async create(createProfileDto: CreateBloodGroupDto): Promise<BloodGroup> {
    return await this.bloodGroupsRepository.save(
      this.bloodGroupsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[BloodGroup[], number]> {
    const { page, limit } = paginationOptions;
    return await this.bloodGroupsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<BloodGroup>): Promise<BloodGroup> {
    return await this.bloodGroupsRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateBloodGroupDto,
  ): Promise<BloodGroup> {
    return await this.bloodGroupsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.bloodGroupsRepository.softDelete(id);
  }
}
