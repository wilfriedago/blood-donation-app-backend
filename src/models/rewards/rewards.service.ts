import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { Reward } from './entities/reward.entity';

@Injectable()
export class RewardsService {
  constructor(
    @InjectRepository(Reward)
    private readonly rewardsRepository: Repository<Reward>,
  ) {}

  async create(createProfileDto: CreateRewardDto): Promise<Reward> {
    return await this.rewardsRepository.save(
      this.rewardsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[Reward[], number]> {
    const { page, limit } = paginationOptions;
    return await this.rewardsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<Reward>): Promise<Reward> {
    return await this.rewardsRepository.findOne({
      where: fields,
    });
  }

  async update(id: number, updateProfileDto: UpdateRewardDto): Promise<Reward> {
    return await this.rewardsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.rewardsRepository.softDelete(id);
  }
}
