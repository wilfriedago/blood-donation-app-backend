import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Hospital } from '@/models/hospitals/entities/hospital.entity';

@Injectable()
export class HospitalSeedService {
  constructor(
    @InjectRepository(Hospital)
    private repository: Repository<Hospital>,
  ) {}

  async run() {
    const countHospitals = await this.repository.count();

    if (countHospitals === 0) {
      await this.repository.save([
        this.repository.create({
          name: 'Hospital 1',
          description: 'Hospital 1 description',
          user: {
            id: 3,
          },
        }),
      ]);
    }
  }
}
