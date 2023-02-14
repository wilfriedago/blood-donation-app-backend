import { Module } from '@nestjs/common';
import { CampaignsStatusesService } from './campaigns-statuses.service';
import { CampaignsStatusesController } from './campaigns-statuses.controller';

@Module({
  controllers: [CampaignsStatusesController],
  providers: [CampaignsStatusesService]
})
export class CampaignsStatusesModule {}
