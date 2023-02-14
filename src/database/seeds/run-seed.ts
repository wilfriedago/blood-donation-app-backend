import { NestFactory } from '@nestjs/core';

import {
  AnswerSeedService,
  BloodBankSeedService,
  BloodGroupSeedService,
  CitySeedService,
  CountrySeedService,
  DonorSeedService,
  HospitalSeedService,
  QuestionnaireSeedService,
  QuestionSeedService,
  RoleSeedService,
  StatusSeedService,
  UserSeedService,
} from '@/database/seeds';

import { SeedModule } from './seed.module';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(BloodGroupSeedService).run();
  await app.get(UserSeedService).run();
  await app.get(DonorSeedService).run();
  await app.get(HospitalSeedService).run();
  await app.get(BloodBankSeedService).run();
  await app.get(CountrySeedService).run();
  await app.get(CitySeedService).run();
  await app.get(QuestionnaireSeedService).run();
  await app.get(QuestionSeedService).run();
  await app.get(AnswerSeedService).run();

  await app.close();
};

void runSeed();
