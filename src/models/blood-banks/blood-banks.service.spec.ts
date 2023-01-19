import { Test, TestingModule } from '@nestjs/testing';

import { BloodBanksService } from './blood-banks.service';

describe('BloodBanksService', () => {
  let service: BloodBanksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodBanksService],
    }).compile();

    service = module.get<BloodBanksService>(BloodBanksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
