import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BloodBank } from '@/models/blood-banks/entities/blood-bank.entity';

@Injectable()
export class BloodBankSeedService {
  constructor(
    @InjectRepository(BloodBank)
    private repository: Repository<BloodBank>,
  ) {}

  async run() {
    const countBloodBanks = await this.repository.count();

    if (countBloodBanks === 0) {
      await this.repository.save([
        {
          name: 'Blood Bank 1',
          description: 'Blood Bank 1 Description',
          user: {
            id: 4,
          },
        },
        {
          name: 'Blood Bank 2',
          description: 'Blood Bank 2 Description',
          user: {
            id: 5,
          },
        },
      ]);
    }
  }
}
