import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateBloodSupplyDto } from './dto/create-blood-supply.dto';
import { UpdateBloodSupplyDto } from './dto/update-blood-supply.dto';
import { BloodSupply } from './entities/blood-supply.entity';

@Injectable()
export class BloodSuppliesService {
  constructor(
    @InjectRepository(BloodSupply)
    private readonly bloodRequestsRepository: Repository<BloodSupply>,
  ) {}

  async create(createProfileDto: CreateBloodSupplyDto): Promise<BloodSupply> {
    return await this.bloodRequestsRepository.save(
      this.bloodRequestsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[BloodSupply[], number]> {
    const { page, limit } = paginationOptions;
    return await this.bloodRequestsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<BloodSupply>): Promise<BloodSupply> {
    return await this.bloodRequestsRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateBloodSupplyDto,
  ): Promise<BloodSupply> {
    return await this.bloodRequestsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.bloodRequestsRepository.softDelete(id);
  }
}
