import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Answer } from '@/models/answers/entities/answer.entity';

@Injectable()
export class AnswerSeedService {
  constructor(
    @InjectRepository(Answer)
    private repository: Repository<Answer>,
  ) {}

  async run() {
    const countAnswer = await this.repository.count();

    if (countAnswer === 0)
      await this.repository.save([
        {
          id: 1,
          value: 'yes',
        },
        {
          id: 2,
          value: 'no',
        },
        {
          id: 3,
          value: "I don't know",
        },
      ]);
  }
}
