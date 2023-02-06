import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createProfileDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(
      this.usersRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[User[], number]> {
    const { page, limit } = paginationOptions;
    return await this.usersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
      relations: ['donor', 'bloodBank', 'hospital'],
    });
  }

  async findOne(fields: EntityCondition<User>): Promise<User> {
    return await this.usersRepository.findOne({
      where: fields,
    });
  }

  async update(id: number, updateProfileDto: UpdateUserDto): Promise<User> {
    return await this.usersRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.usersRepository.softDelete(id);
  }
}
