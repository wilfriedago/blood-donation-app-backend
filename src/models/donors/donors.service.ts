import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@/models/users/entities/user.entity';
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
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createProfileDto: CreateDonorDto): Promise<Donor> {
    return await this.donorsRepository.save(
      this.donorsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[Donor[], number]> {
    const { page, limit } = paginationOptions;
    return await this.donorsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<Donor>): Promise<Donor> {
    const donor = await this.donorsRepository.findOne({
      where: fields,
    });

    if (donor) return donor;
    else
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: 'userNotFound',
          },
        },
        HttpStatus.NOT_FOUND,
      );
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
