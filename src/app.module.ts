import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { HeaderResolver } from 'nestjs-i18n';
import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
import * as path from 'path';
import { DataSource } from 'typeorm';

import { AuthAppleModule } from '@/Auth/auth-apple/auth-apple.module';
import { AuthModule } from '@/Auth/auth-credentials/auth.module';
import { AuthFacebookModule } from '@/Auth/auth-facebook/auth-facebook.module';
import { AuthGoogleModule } from '@/Auth/auth-google/auth-google.module';
import { AuthTwitterModule } from '@/Auth/auth-twitter/auth-twitter.module';
import { ForgotModule } from '@/Auth/forgot/forgot.module';
import appConfig from '@/Config/app.config';
import appleConfig from '@/Config/apple.config';
import authConfig from '@/Config/auth.config';
import databaseConfig from '@/Config/database.config';
import facebookConfig from '@/Config/facebook.config';
import fileConfig from '@/Config/file.config';
import googleConfig from '@/Config/google.config';
import mailConfig from '@/Config/mail.config';
import twitterConfig from '@/Config/twitter.config';

import { TypeOrmConfigService } from './database/typeorm-config.service';
import { FilesModule } from './files/files.module';
import { HomeModule } from './home/home.module';
import { MailModule } from './mail/mail.module';
import { MailConfigService } from './mail/mail-config.service';
import { UsersModule } from './users/users.module';

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
  ],
})
export class AppModule {}
