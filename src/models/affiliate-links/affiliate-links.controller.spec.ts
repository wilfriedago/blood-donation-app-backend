import { Test, TestingModule } from '@nestjs/testing';
import { AffiliateLinksController } from './affiliate-links.controller';
import { AffiliateLinksService } from './affiliate-links.service';

describe('AffiliateLinksController', () => {
  let controller: AffiliateLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffiliateLinksController],
      providers: [AffiliateLinksService],
    }).compile();

    controller = module.get<AffiliateLinksController>(AffiliateLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
