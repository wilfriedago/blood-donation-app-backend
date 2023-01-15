import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Facebook } from 'fb';

import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthFacebookLoginDto } from './dto/auth-facebook-login.dto';
import { FacebookInterface } from './interfaces/facebook.interface';

@Injectable()
export class AuthFacebookService {
  private fb;

  constructor(private configService: ConfigService) {
    this.fb = new Facebook({
      appId: configService.get('facebook.appId'),
      appSecret: configService.get('facebook.appSecret'),
      version: 'v7.0',
    });
  }

  async getProfileByToken(
    loginDto: AuthFacebookLoginDto,
  ): Promise<SocialInterface> {
    this.fb.setAccessToken(loginDto.accessToken);

    const data: FacebookInterface = await new Promise((resolve) => {
      this.fb.api(
        '/me',
        'get',
        { fields: 'id,last_name,email,first_name' },
        (response) => {
          resolve(response);
        },
      );
    });

    return {
      id: data.id,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
    };
  }
}
