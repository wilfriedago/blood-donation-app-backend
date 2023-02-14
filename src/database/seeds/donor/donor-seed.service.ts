import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Donor } from '@/models/donors/entities/donor.entity';

@Injectable()
export class DonorSeedService {
  constructor(
    @InjectRepository(Donor)
    private repository: Repository<Donor>,
  ) {}

  async run() {
    const countDonors = await this.repository.count();

    if (countDonors === 0) {
      await this.repository.save([
        this.repository.create({
          firstName: 'Wilfried',
          lastName: 'AGO',
          birthdate: new Date('2000-09-22'),
          gender: 'M',
          weight: 70,
          user: {
            id: 2,
          },
          bloodGroup: {
            id: 1,
          },
        }),
      ]);
    }
  }
}
