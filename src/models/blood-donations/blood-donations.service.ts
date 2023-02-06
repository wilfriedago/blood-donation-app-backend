import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateBloodDonationDto } from './dto/create-blood-donation.dto';
import { UpdateBloodDonationDto } from './dto/update-blood-donation.dto';
import { BloodDonation } from './entities/blood-donation.entity';

@Injectable()
export class BloodDonationsService {
  constructor(
    @InjectRepository(BloodDonation)
    private readonly bloodDonationsRepository: Repository<BloodDonation>,
  ) {}

  async create(
    createProfileDto: CreateBloodDonationDto,
  ): Promise<BloodDonation> {
    return await this.bloodDonationsRepository.save(
      this.bloodDonationsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[BloodDonation[], number]> {
    const { page, limit } = paginationOptions;
    return await this.bloodDonationsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(
    fields: EntityCondition<BloodDonation>,
  ): Promise<BloodDonation> {
    return await this.bloodDonationsRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateBloodDonationDto,
  ): Promise<BloodDonation> {
    return await this.bloodDonationsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.bloodDonationsRepository.softDelete(id);
  }
}
