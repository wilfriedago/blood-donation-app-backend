import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionsRepository: Repository<Question>,
  ) {}

  async create(createProfileDto: CreateQuestionDto): Promise<Question> {
    return await this.questionsRepository.save(
      this.questionsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[Question[], number]> {
    const { page, limit } = paginationOptions;
    return await this.questionsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<Question>): Promise<Question> {
    return await this.questionsRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateQuestionDto,
  ): Promise<Question> {
    return await this.questionsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.questionsRepository.softDelete(id);
  }
}
