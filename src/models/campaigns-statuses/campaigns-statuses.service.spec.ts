import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsStatusesService } from './campaigns-statuses.service';

describe('CampaignsStatusesService', () => {
  let service: CampaignsStatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignsStatusesService],
    }).compile();

    service = module.get<CampaignsStatusesService>(CampaignsStatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
