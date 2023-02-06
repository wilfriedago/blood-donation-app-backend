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
  questions = [
    {
      id: 1,
      text: 'Êtes vous âgé de 18 ans ou plus ?',
      type: 'true/false',
      order: 1,
      description: 'Vous devez avoir 18 ans ou plus pour donner du sang.',
    },
    {
      id: 2,
      text: 'Avez-vous déjà donné du sang auparavant ?',
      type: 'yes/no',
      order: 2,
      description:
        'Si vous avez déjà donné du sang, vous pouvez donner à nouveau après 3 mois.',
      answer: 'yes',
    },
    {
      id: 3,
      text: 'Avez-vous déjà été diagnostiqué pour une maladie transmissible par le sang ?',
      type: 'yes/no',
      order: 3,
      description:
        'Si vous avez déjà été diagnostiqué pour une maladie transmissible par le sang, vous ne pouvez pas donner de sang.',
      answer: 'no',
    },
    {
      id: 4,
      text: 'Avez-vous des tatouages ou des piercings ?',
      type: 'yes/no',
      order: 4,
      description: '',
      answer: 'no',
    },
    {
      id: 5,
      text: 'Êtes-vous enceinte, ou avez-vous donné naissance à un enfant au cours des 12 derniers mois ?',
      type: 'yes/no',
      order: 5,
      answer: 'no',
      description: 'Si vous êtes enceinte, vous ne pouvez pas donner de sang.',
    },
    {
      id: 6,
      text: 'Suivez-vous un traitement médical actuellement ?',
      type: 'yes/no',
      answer: 'no',
      order: 6,
      description:
        'Si vous suivez un traitement médical, vous pouvez donner du sang.',
    },
    {
      id: 7,
      text: 'Pesez-vous plus de 50 kg ?',
      order: 7,
      description:
        'Si vous pesez moins de 50 kg, vous ne pouvez pas donner de sang.',
      type: 'yes/no',
      answer: 'yes',
    },
  ];

  async run() {
    const countCities = await this.repository.count();
    if (countCities === 0) {
      await this.repository.save(this.questions);
    }
  }
}
