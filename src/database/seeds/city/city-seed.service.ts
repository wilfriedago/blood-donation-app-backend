import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from '@/models/cities/entities/city.entity';

@Injectable()
export class CitySeedService {
  constructor(
    @InjectRepository(City)
    private repository: Repository<City>,
  ) {}
  cities = [
    {
      id: 1,
      name: 'Abomey',
    },
    {
      id: 2,
      name: 'Abomey-Calavi',
    },
    {
      id: 3,
      name: 'Allada',
    },
    {
      id: 4,
      name: 'Banikoara',
    },
    {
      id: 5,
      name: 'Bassila',
    },
    {
      id: 6,
      name: 'Bembèrèkè',
    },
    {
      id: 7,
      name: 'Bohicon',
    },
    {
      id: 8,
      name: 'Bétérou',
    },
    {
      id: 9,
      name: 'Agbangnizoun',
    },
    {
      id: 10,
      name: 'Athieme',
    },
    {
      id: 11,
      name: 'Djougou',
    },
    {
      id: 12,
      name: 'Comé',
    },
    {
      id: 13,
      name: 'Cotonou',
    },
    {
      id: 14,
      name: 'Cové',
    },
    {
      id: 15,
      name: 'Dassa-Zoumé',
    },
    {
      id: 16,
      name: 'Djakotomey',
    },
    {
      id: 17,
      name: 'Djougou',
    },
    {
      id: 18,
      name: 'Dogbo',
    },
    {
      id: 19,
      name: 'Guilmaro',
    },
    {
      id: 20,
      name: 'Hinvi',
    },
    {
      id: 21,
      name: 'Hévié',
    },
    {
      id: 22,
      name: 'Kandi',
    },
    {
      id: 23,
      name: 'Kétou',
    },
    {
      id: 24,
      name: 'Lokossa',
    },
    {
      id: 25,
      name: 'Malanville',
    },
    {
      id: 26,
      name: 'Natitingou',
    },
    {
      id: 27,
      name: 'Nikki',
    },
    {
      id: 28,
      name: 'Ouidah',
    },
    {
      id: 29,
      name: 'Parakou',
    },
    {
      id: 30,
      name: 'Pobé',
    },
    {
      id: 31,
      name: 'Porto-Novo',
    },
    {
      id: 32,
      name: 'Sakété',
    },
    {
      id: 33,
      name: 'Savalou',
    },
    {
      id: 34,
      name: 'Savé',
    },
    {
      id: 35,
      name: 'Tanguieta',
    },
    {
      id: 36,
      name: 'Tchaourou',
    },
  ];

  async run() {
    const countCities = await this.repository.count();
    if (countCities === 0) {
      await this.repository.save(this.cities);
    }
  }
}
