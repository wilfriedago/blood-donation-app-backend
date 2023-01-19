import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateBloodBankDto } from './dto/create-blood-bank.dto';
import { UpdateBloodBankDto } from './dto/update-blood-bank.dto';
import { BloodBank } from './entities/blood-bank.entity';

@Injectable()
export class BloodBanksService {
  constructor(
    @InjectRepository(BloodBank)
    private readonly bloodBanksRepository: Repository<BloodBank>,
  ) {}

  async create(createProfileDto: CreateBloodBankDto): Promise<BloodBank> {
    return await this.bloodBanksRepository.save(
      this.bloodBanksRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<BloodBank[]> {
    const { page, limit } = paginationOptions;
    return await this.bloodBanksRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(fields: EntityCondition<BloodBank>): Promise<BloodBank> {
    return await this.bloodBanksRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateBloodBankDto,
  ): Promise<BloodBank> {
    return await this.bloodBanksRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.bloodBanksRepository.softDelete(id);
  }
}
