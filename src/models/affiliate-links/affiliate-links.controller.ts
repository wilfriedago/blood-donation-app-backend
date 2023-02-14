import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AffiliateLinksService } from './affiliate-links.service';
import { CreateAffiliateLinkDto } from './dto/create-affiliate-link.dto';
import { UpdateAffiliateLinkDto } from './dto/update-affiliate-link.dto';

@Controller('affiliate-links')
export class AffiliateLinksController {
  constructor(private readonly affiliateLinksService: AffiliateLinksService) {}

  @Post()
  create(@Body() createAffiliateLinkDto: CreateAffiliateLinkDto) {
    return this.affiliateLinksService.create(createAffiliateLinkDto);
  }

  @Get()
  findAll() {
    return this.affiliateLinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affiliateLinksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffiliateLinkDto: UpdateAffiliateLinkDto) {
    return this.affiliateLinksService.update(+id, updateAffiliateLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affiliateLinksService.remove(+id);
  }
}
