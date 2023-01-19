import { Test, TestingModule } from '@nestjs/testing';

import { BloodRequestsService } from './blood-requests.service';

describe('BloodRequestsService', () => {
  let service: BloodRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodRequestsService],
    }).compile();

    service = module.get<BloodRequestsService>(BloodRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
