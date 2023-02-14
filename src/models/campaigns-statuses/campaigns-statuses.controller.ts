import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaignsStatusesService } from './campaigns-statuses.service';
import { CreateCampaignsStatusDto } from './dto/create-campaigns-status.dto';
import { UpdateCampaignsStatusDto } from './dto/update-campaigns-status.dto';

@Controller('campaigns-statuses')
export class CampaignsStatusesController {
  constructor(private readonly campaignsStatusesService: CampaignsStatusesService) {}

  @Post()
  create(@Body() createCampaignsStatusDto: CreateCampaignsStatusDto) {
    return this.campaignsStatusesService.create(createCampaignsStatusDto);
  }

  @Get()
  findAll() {
    return this.campaignsStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignsStatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaignsStatusDto: UpdateCampaignsStatusDto) {
    return this.campaignsStatusesService.update(+id, updateCampaignsStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignsStatusesService.remove(+id);
  }
}
