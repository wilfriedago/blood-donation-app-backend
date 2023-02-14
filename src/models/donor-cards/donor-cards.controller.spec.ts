import { Test, TestingModule } from '@nestjs/testing';
import { DonorCardsController } from './donor-cards.controller';
import { DonorCardsService } from './donor-cards.service';

describe('DonorCardsController', () => {
  let controller: DonorCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonorCardsController],
      providers: [DonorCardsService],
    }).compile();

    controller = module.get<DonorCardsController>(DonorCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
