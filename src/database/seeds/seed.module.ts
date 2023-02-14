import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { appConfig, databaseConfig } from '@/config';
import {
  AnswerSeedModule,
  BloodBankSeedModule,
  BloodGroupSeedModule,
  CitySeedModule,
  CountrySeedModule,
  DonorSeedModule,
  HospitalSeedModule,
  QuestionnaireSeedModule,
  QuestionSeedModule,
  RoleSeedModule,
  StatusSeedModule,
  UserSeedModule,
} from '@/database/seeds';
import { TypeOrmConfigService } from '@/database/typeorm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    AnswerSeedModule,
    BloodBankSeedModule,
    BloodGroupSeedModule,
    CitySeedModule,
    CountrySeedModule,
    DonorSeedModule,
    HospitalSeedModule,
    QuestionnaireSeedModule,
    QuestionSeedModule,
    RoleSeedModule,
    StatusSeedModule,
    UserSeedModule,
  ],
})
export class SeedModule {}
