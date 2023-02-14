import { PartialType } from '@nestjs/swagger';
import { CreateCampaignsStatusDto } from './create-campaigns-status.dto';

export class UpdateCampaignsStatusDto extends PartialType(CreateCampaignsStatusDto) {}
