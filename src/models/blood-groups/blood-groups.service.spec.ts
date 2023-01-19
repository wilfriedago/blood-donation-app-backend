import { Test, TestingModule } from '@nestjs/testing';

import { BloodGroupsService } from './blood-groups.service';

describe('BloodGroupsService', () => {
  let service: BloodGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodGroupsService],
    }).compile();

    service = module.get<BloodGroupsService>(BloodGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
