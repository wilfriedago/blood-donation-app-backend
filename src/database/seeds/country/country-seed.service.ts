import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Country } from '@/models/countries/entities/country.entity';

@Injectable()
export class CountrySeedService {
  constructor(
    @InjectRepository(Country)
    private repository: Repository<Country>,
  ) {}
  countries = [
    {
      id: 1,
      name: 'Benin',
    },
    {
      id: 2,
      name: 'Burkina Faso',
    },
    {
      id: 3,
      name: "Côte d'Ivoire",
    },
    {
      id: 4,
      name: 'Ghana',
    },
    {
      id: 5,
      name: 'Guinea',
    },
    {
      id: 6,
      name: 'Guinea-Bissau',
    },
    {
      id: 7,
      name: 'Togo',
    },
  ];

  async run() {
    const countCities = await this.repository.count();
    if (countCities === 0) {
      await this.repository.save(this.countries);
    }
  }
}
