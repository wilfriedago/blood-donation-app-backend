import { registerAs } from '@nestjs/config';

export const appleConfig = registerAs('apple', () => ({
  appAudience: JSON.parse(process.env.APPLE_APP_AUDIENCE),
}));
