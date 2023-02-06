import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateBloodRequestDto } from './dto/create-blood-request.dto';
import { UpdateBloodRequestDto } from './dto/update-blood-request.dto';
import { BloodRequest } from './entities/blood-request.entity';

@Injectable()
export class BloodRequestsService {
  constructor(
    @InjectRepository(BloodRequest)
    private readonly bloodRequestsRepository: Repository<BloodRequest>,
  ) {}

  async create(createProfileDto: CreateBloodRequestDto): Promise<BloodRequest> {
    return await this.bloodRequestsRepository.save(
      this.bloodRequestsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[BloodRequest[], number]> {
    const { page, limit } = paginationOptions;
    return await this.bloodRequestsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<BloodRequest>): Promise<BloodRequest> {
    return await this.bloodRequestsRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateBloodRequestDto,
  ): Promise<BloodRequest> {
    return await this.bloodRequestsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.bloodRequestsRepository.softDelete(id);
  }
}
