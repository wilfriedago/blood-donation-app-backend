import { Test, TestingModule } from '@nestjs/testing';
import { DonorCardsService } from './donor-cards.service';

describe('DonorCardsService', () => {
  let service: DonorCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonorCardsService],
    }).compile();

    service = module.get<DonorCardsService>(DonorCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
