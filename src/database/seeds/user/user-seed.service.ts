import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@/models/users/entities/user.entity';
import { RoleEnum } from '@/roles/roles.enum';
import { StatusEnum } from '@/statuses/statuses.enum';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async run() {
    const countAdmin = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.admin,
        },
      },
    });

    if (countAdmin === 0) {
      await this.repository.save(
        this.repository.create({
          email: 'admin@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.admin,
            name: 'Admin',
          },
          status: {
            id: StatusEnum.active,
            name: 'Active',
          },
        }),
      );
    }

    const countDonor = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.donor,
        },
      },
    });

    if (countDonor === 0) {
      await this.repository.save(
        this.repository.create({
          email: 'wilfriedago@pm.me',
          password: 'azerty1234',
          role: {
            id: RoleEnum.donor,
            name: 'Donor',
          },
          status: {
            id: StatusEnum.incomplete,
            name: 'Incomplete',
          },
        }),
      );
    }

    const countHospital = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.hospital,
        },
      },
    });

    if (countHospital === 0) {
      await this.repository.save(
        this.repository.create({
          email: 'cliniquelagrace@gmail.com',
          password: 'azerty1234',
          role: {
            id: RoleEnum.hospital,
            name: 'Hospital',
          },
          status: {
            id: StatusEnum.incomplete,
            name: 'Incomplete',
          },
        }),
      );
    }

    const countBloodBank = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.bloodBank,
        },
      },
    });

    if (countBloodBank === 0) {
      await this.repository.save(
        this.repository.create({
          email: 'bloodbank1@gmail.com',
          password: 'azerty1234',
          role: {
            id: RoleEnum.bloodBank,
            name: 'Blood Bank',
          },
          status: {
            id: StatusEnum.incomplete,
            name: 'Incomplete',
          },
        }),
      );

      await this.repository.save(
        this.repository.create({
          email: 'bloodbank2@gmail.com',
          password: 'azerty1234',
          role: {
            id: RoleEnum.bloodBank,
            name: 'Blood Bank',
          },
          status: {
            id: StatusEnum.incomplete,
            name: 'Incomplete',
          },
        }),
      );
    }
  }
}
