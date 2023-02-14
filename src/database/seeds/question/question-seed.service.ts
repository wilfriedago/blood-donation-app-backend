import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Question } from '@/models/questions/entities/question.entity';

@Injectable()
export class QuestionSeedService {
  constructor(
    @InjectRepository(Question)
    private repository: Repository<Question>,
  ) {}

  async run() {
    const countQuestions = await this.repository.count();
    if (countQuestions === 0) {
      await this.repository.save([
        {
          id: 1,
          value: 'Avez-vous déjà donné du sang auparavant ?',
          description:
            'Si vous avez déjà donné du sang, vous pouvez donner à nouveau après 3 mois.',
          questionnaire: { id: 1 },
        },
        {
          id: 2,
          value:
            'Avez-vous déjà été diagnostiqué pour une maladie transmissible par le sang ?',
          description:
            'Si vous avez déjà été diagnostiqué pour une maladie transmissible par le sang, vous ne pouvez pas donner de sang.',
          questionnaire: { id: 1 },
        },
        {
          id: 3,
          value: 'Avez-vous des tatouages ou des piercings ?',
          description:
            'Si vous avez des tatouages ou des piercings, effectuez un don de sang après 3 mois.',
          questionnaire: { id: 1 },
        },
        {
          id: 4,
          value:
            'Êtes-vous enceinte, ou avez-vous donné naissance à un enfant au cours des 12 derniers mois ?',
          description:
            'Si vous êtes enceinte, vous ne pouvez pas donner de sang.',
          questionnaire: { id: 1 },
        },
        {
          id: 5,
          value: 'Suivez-vous un traitement médical actuellement ?',
          description:
            'Si vous suivez un traitement médical, vous pouvez donner du sang.',
          questionnaire: { id: 1 },
        },
      ]);
    }
  }
}
