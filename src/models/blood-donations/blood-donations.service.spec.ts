import { Test, TestingModule } from '@nestjs/testing';

import { BloodDonationsService } from './blood-donations.service';

describe('BloodDonationsService', () => {
  let service: BloodDonationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodDonationsService],
    }).compile();

    service = module.get<BloodDonationsService>(BloodDonationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
