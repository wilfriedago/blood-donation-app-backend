import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsStatusesController } from './campaigns-statuses.controller';
import { CampaignsStatusesService } from './campaigns-statuses.service';

describe('CampaignsStatusesController', () => {
  let controller: CampaignsStatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignsStatusesController],
      providers: [CampaignsStatusesService],
    }).compile();

    controller = module.get<CampaignsStatusesController>(CampaignsStatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
