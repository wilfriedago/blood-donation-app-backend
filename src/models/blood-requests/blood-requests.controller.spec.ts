import { Test, TestingModule } from '@nestjs/testing';

import { BloodRequestsController } from './blood-requests.controller';
import { BloodRequestsService } from './blood-requests.service';

describe('BloodRequestsController', () => {
  let controller: BloodRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodRequestsController],
      providers: [BloodRequestsService],
    }).compile();

    controller = module.get<BloodRequestsController>(BloodRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
