import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';

@Injectable()
export class BloodGroupSeedService {
  constructor(
    @InjectRepository(BloodGroup)
    private repository: Repository<BloodGroup>,
  ) {}
  bloodGroups = [
    {
      id: 1,
      name: 'A+',
    },
    {
      id: 2,
      name: 'A-',
    },
    {
      id: 3,
      name: 'B+',
    },
    {
      id: 4,
      name: 'B-',
    },
    {
      id: 5,
      name: 'AB+',
    },
    {
      id: 6,
      name: 'AB-',
    },
    {
      id: 7,
      name: 'O+',
    },
    {
      id: 8,
      name: 'O-',
    },
  ];

  async run() {
    const countBloodGroups = await this.repository.count();
    if (countBloodGroups === 0) {
      await this.repository.save(this.bloodGroups);
    }
  }
}
