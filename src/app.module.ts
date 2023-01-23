import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { HeaderResolver } from 'nestjs-i18n';
import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
import * as path from 'path';
import { DataSource } from 'typeorm';

import {
  AuthAppleModule,
  AuthFacebookModule,
  AuthGoogleModule,
  AuthModule,
  AuthTwitterModule,
} from '@/auth';
import {
  appConfig,
  appleConfig,
  authConfig,
  databaseConfig,
  facebookConfig,
  fileConfig,
  googleConfig,
  mailConfig,
  twitterConfig,
} from '@/config';
import { TypeOrmConfigService } from '@/database/typeorm-config.service';
import { FilesModule } from '@/files/files.module';
import { ForgotModule } from '@/forgot/forgot.module';
import { HomeModule } from '@/home/home.module';
import { MailModule } from '@/mail/mail.module';
import { MailConfigService } from '@/mail/mail-config.service';
import {
  AppointmentsModule,
  BloodBanksModule,
  BloodDonationsModule,
  BloodGroupsModule,
  BloodRequestsModule,
  CampaignsModule,
  CitiesModule,
  DonorsModule,
  HospitalsModule,
  RewardsModule,
  UsersModule,
} from '@/models';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
        mailConfig,
        fileConfig,
        facebookConfig,
        googleConfig,
        twitterConfig,
        appleConfig,
      ],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    MailerModule.forRootAsync({
      useClass: MailConfigService,
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.get('app.fallbackLanguage'),
        loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService) => {
            return [configService.get('app.headerLanguage')];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UsersModule,
    FilesModule,
    AuthModule,
    AuthFacebookModule,
    AuthGoogleModule,
    AuthTwitterModule,
    AuthAppleModule,
    ForgotModule,
    MailModule,
    HomeModule,
    CitiesModule,
    BloodBanksModule,
    DonorsModule,
    BloodRequestsModule,
    RewardsModule,
    BloodGroupsModule,
    BloodDonationsModule,
    HospitalsModule,
    CampaignsModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
