import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from '@/roles/entities/role.entity';
import { RoleEnum } from '@/roles/roles.enum';

@Injectable()
export class RoleSeedService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
  ) {}

  async run() {
    const countDonor = await this.repository.count({
      where: {
        id: RoleEnum.donor,
      },
    });

    if (countDonor === 0)
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.donor,
          name: 'Donor',
        }),
      );

    const countHospital = await this.repository.count({
      where: {
        id: RoleEnum.hospital,
      },
    });

    if (countHospital === 0)
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.hospital,
          name: 'Hospital',
        }),
      );

    const countBloodBank = await this.repository.count({
      where: {
        id: RoleEnum.bloodBank,
      },
    });

    if (countBloodBank === 0)
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.bloodBank,
          name: 'Blood Bank',
        }),
      );

    const countAdmin = await this.repository.count({
      where: {
        id: RoleEnum.admin,
      },
    });

    if (countAdmin === 0)
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.admin,
          name: 'Admin',
        }),
      );

    const countSuperAdmin = await this.repository.count({
      where: {
        id: RoleEnum.superAdmin,
      },
    });

    if (countSuperAdmin === 0)
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.superAdmin,
          name: 'Super Admin',
        }),
      );
  }
}
