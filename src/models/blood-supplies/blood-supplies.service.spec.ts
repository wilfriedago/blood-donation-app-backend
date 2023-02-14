import { Test, TestingModule } from '@nestjs/testing';
import { BloodSuppliesService } from './blood-supplies.service';

describe('BloodSuppliesService', () => {
  let service: BloodSuppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodSuppliesService],
    }).compile();

    service = module.get<BloodSuppliesService>(BloodSuppliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
