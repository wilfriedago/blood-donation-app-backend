import { registerAs } from '@nestjs/config';

export const facebookConfig = registerAs('facebook', () => ({
  appId: process.env.FACEBOOK_APP_ID,
  appSecret: process.env.FACEBOOK_APP_SECRET,
}));
