import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonorCardsService } from './donor-cards.service';
import { CreateDonorCardDto } from './dto/create-donor-card.dto';
import { UpdateDonorCardDto } from './dto/update-donor-card.dto';

@Controller('donor-cards')
export class DonorCardsController {
  constructor(private readonly donorCardsService: DonorCardsService) {}

  @Post()
  create(@Body() createDonorCardDto: CreateDonorCardDto) {
    return this.donorCardsService.create(createDonorCardDto);
  }

  @Get()
  findAll() {
    return this.donorCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donorCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonorCardDto: UpdateDonorCardDto) {
    return this.donorCardsService.update(+id, updateDonorCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donorCardsService.remove(+id);
  }
}
