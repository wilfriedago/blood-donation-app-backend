import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Status } from '@/statuses/entities/status.entity';
import { StatusEnum } from '@/statuses/statuses.enum';

@Injectable()
export class StatusSeedService {
  constructor(
    @InjectRepository(Status)
    private repository: Repository<Status>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      await this.repository.save([
        this.repository.create({
          id: StatusEnum.active,
          name: 'Active',
        }),
        this.repository.create({
          id: StatusEnum.inactive,
          name: 'Inactive',
        }),
        this.repository.create({
          id: StatusEnum.pending,
          name: 'Pending',
        }),
        this.repository.create({
          id: StatusEnum.incomplete,
          name: 'Incomplete',
        }),
        this.repository.create({
          id: StatusEnum.rejected,
          name: 'Rejected',
        }),
        this.repository.create({
          id: StatusEnum.verified,
          name: 'Verified',
        }),
        this.repository.create({
          id: StatusEnum.suspended,
          name: 'Suspended',
        }),
        this.repository.create({
          id: StatusEnum.blocked,
          name: 'Blocked',
        }),
      ]);
    }
  }
}
