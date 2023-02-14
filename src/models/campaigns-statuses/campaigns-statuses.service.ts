import { Injectable } from '@nestjs/common';
import { CreateCampaignsStatusDto } from './dto/create-campaigns-status.dto';
import { UpdateCampaignsStatusDto } from './dto/update-campaigns-status.dto';

@Injectable()
export class CampaignsStatusesService {
  create(createCampaignsStatusDto: CreateCampaignsStatusDto) {
    return 'This action adds a new campaignsStatus';
  }

  findAll() {
    return `This action returns all campaignsStatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignsStatus`;
  }

  update(id: number, updateCampaignsStatusDto: UpdateCampaignsStatusDto) {
    return `This action updates a #${id} campaignsStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignsStatus`;
  }
}
