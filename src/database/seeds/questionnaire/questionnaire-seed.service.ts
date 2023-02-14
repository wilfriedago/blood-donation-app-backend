import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Questionnaire } from '@/models/questionnaires/entities/questionnaire.entity';

@Injectable()
export class QuestionnaireSeedService {
  constructor(
    @InjectRepository(Questionnaire)
    private repository: Repository<Questionnaire>,
  ) {}

  async run() {
    const countQuestionnaire = await this.repository.count();

    if (countQuestionnaire === 0)
      await this.repository.save(
        this.repository.create({
          id: 1,
          title: 'Donor Eligibility Questionnaire',
          description: 'Donor Eligibility Questionnaire',
        }),
      );
  }
}
