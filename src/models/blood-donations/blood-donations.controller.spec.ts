import { Test, TestingModule } from '@nestjs/testing';

import { BloodDonationsController } from './blood-donations.controller';
import { BloodDonationsService } from './blood-donations.service';

describe('BloodDonationsController', () => {
  let controller: BloodDonationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodDonationsController],
      providers: [BloodDonationsService],
    }).compile();

    controller = module.get<BloodDonationsController>(BloodDonationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
