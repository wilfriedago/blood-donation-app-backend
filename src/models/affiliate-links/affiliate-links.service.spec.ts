import { Test, TestingModule } from '@nestjs/testing';
import { AffiliateLinksService } from './affiliate-links.service';

describe('AffiliateLinksService', () => {
  let service: AffiliateLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffiliateLinksService],
    }).compile();

    service = module.get<AffiliateLinksService>(AffiliateLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
