import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { Question } from '../questions/entities/question.entity';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { Questionnaire } from './entities/questionnaire.entity';

@Injectable()
export class QuestionnairesService {
  constructor(
    @InjectRepository(Questionnaire)
    private readonly questionnairesRepository: Repository<Questionnaire>,
    @InjectRepository(Question)
    private readonly questionsRepository: Repository<Question>,
  ) {}

  async create(
    createProfileDto: CreateQuestionnaireDto,
  ): Promise<Questionnaire> {
    return await this.questionnairesRepository.save(
      this.questionnairesRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[Questionnaire[], number]> {
    const { page, limit } = paginationOptions;
    return await this.questionnairesRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(
    fields: EntityCondition<Questionnaire>,
  ): Promise<Questionnaire> {
    return await this.questionnairesRepository.findOne({
      where: fields,
    });
  }

  async findQuestions(
    fields: EntityCondition<Questionnaire>,
  ): Promise<Question[]> {
    const questions = await this.questionsRepository.find({
      where: {
        questionnaire: fields,
      },
    });
    return questions;
  }

  async update(
    id: number,
    updateProfileDto: UpdateQuestionnaireDto,
  ): Promise<Questionnaire> {
    return await this.questionnairesRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.questionnairesRepository.softDelete(id);
  }
}
