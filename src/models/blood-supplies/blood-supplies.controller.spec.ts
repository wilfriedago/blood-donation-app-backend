import { Test, TestingModule } from '@nestjs/testing';
import { BloodSuppliesController } from './blood-supplies.controller';
import { BloodSuppliesService } from './blood-supplies.service';

describe('BloodSuppliesController', () => {
  let controller: BloodSuppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodSuppliesController],
      providers: [BloodSuppliesService],
    }).compile();

    controller = module.get<BloodSuppliesController>(BloodSuppliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
