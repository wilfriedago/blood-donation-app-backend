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
      country: { id: 1 },
    },
    {
      id: 2,
      name: 'Abomey-Calavi',
      country: { id: 1 },
    },
    {
      id: 3,
      name: 'Allada',
      country: { id: 1 },
    },
    {
      id: 4,
      name: 'Banikoara',
      country: { id: 1 },
    },
    {
      id: 5,
      name: 'Bassila',
      country: { id: 1 },
    },
    {
      id: 6,
      name: 'Bembèrèkè',
      country: { id: 1 },
    },
    {
      id: 7,
      name: 'Bohicon',
      country: { id: 1 },
    },
    {
      id: 8,
      name: 'Bétérou',
      country: { id: 1 },
    },
    {
      id: 9,
      name: 'Agbangnizoun',
      country: { id: 1 },
    },
    {
      id: 10,
      name: 'Athieme',
      country: { id: 1 },
    },
    {
      id: 11,
      name: 'Djougou',
      country: { id: 1 },
    },
    {
      id: 12,
      name: 'Comé',
      country: { id: 1 },
    },
    {
      id: 13,
      name: 'Cotonou',
      country: { id: 1 },
    },
    {
      id: 14,
      name: 'Cové',
      country: { id: 1 },
    },
    {
      id: 15,
      name: 'Dassa-Zoumé',
      country: { id: 1 },
    },
    {
      id: 16,
      name: 'Djakotomey',
      country: { id: 1 },
    },
    {
      id: 17,
      name: 'Djougou',
      country: { id: 1 },
    },
    {
      id: 18,
      name: 'Dogbo',
      country: { id: 1 },
    },
    {
      id: 19,
      name: 'Guilmaro',
      country: { id: 1 },
    },
    {
      id: 20,
      name: 'Hinvi',
      country: { id: 1 },
    },
    {
      id: 21,
      name: 'Hévié',
      country: { id: 1 },
    },
    {
      id: 22,
      name: 'Kandi',
      country: { id: 1 },
    },
    {
      id: 23,
      name: 'Kétou',
      country: { id: 1 },
    },
    {
      id: 24,
      name: 'Lokossa',
      country: { id: 1 },
    },
    {
      id: 25,
      name: 'Malanville',
      country: { id: 1 },
    },
    {
      id: 26,
      name: 'Natitingou',
      country: { id: 1 },
    },
    {
      id: 27,
      name: 'Nikki',
      country: { id: 1 },
    },
    {
      id: 28,
      name: 'Ouidah',
      country: { id: 1 },
    },
    {
      id: 29,
      name: 'Parakou',
      country: { id: 1 },
    },
    {
      id: 30,
      name: 'Pobé',
      country: { id: 1 },
    },
    {
      id: 31,
      name: 'Porto-Novo',
      country: { id: 1 },
    },
    {
      id: 32,
      name: 'Sakété',
      country: { id: 1 },
    },
    {
      id: 33,
      name: 'Savalou',
      country: { id: 1 },
    },
    {
      id: 34,
      name: 'Savé',
      country: { id: 1 },
    },
    {
      id: 35,
      name: 'Tanguieta',
      country: { id: 1 },
    },
    {
      id: 36,
      name: 'Tchaourou',
      country: {
        id: 1,
      },
    },
  ];

  async run() {
    const countCities = await this.repository.count();
    if (countCities === 0) {
      await this.repository.save(this.cities);
    }
  }
}
