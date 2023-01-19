import { Test, TestingModule } from '@nestjs/testing';

import { BloodBanksController } from './blood-banks.controller';
import { BloodBanksService } from './blood-banks.service';

describe('BloodBanksController', () => {
  let controller: BloodBanksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodBanksController],
      providers: [BloodBanksService],
    }).compile();

    controller = module.get<BloodBanksController>(BloodBanksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
