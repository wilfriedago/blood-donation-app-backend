import { Test, TestingModule } from '@nestjs/testing';

import { BloodGroupsController } from './blood-groups.controller';
import { BloodGroupsService } from './blood-groups.service';

describe('BloodGroupsController', () => {
  let controller: BloodGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodGroupsController],
      providers: [BloodGroupsService],
    }).compile();

    controller = module.get<BloodGroupsController>(BloodGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
