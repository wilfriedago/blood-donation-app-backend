import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { appConfig, databaseConfig } from '@/config';
import { TypeOrmConfigService } from '@/database/typeorm-config.service';

import { BloodGroupSeedModule } from './blood-group/blood-group-seed.module';
import { CitySeedModule } from './city/city-seed.module';
import { QuestionSeedModule } from './question/question-seed.module';
import { RoleSeedModule } from './role/role-seed.module';
import { StatusSeedModule } from './status/status-seed.module';
import { UserSeedModule } from './user/user-seed.module';

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
    RoleSeedModule,
    StatusSeedModule,
    UserSeedModule,
    CitySeedModule,
    BloodGroupSeedModule,
    QuestionSeedModule,
  ],
})
export class SeedModule {}
