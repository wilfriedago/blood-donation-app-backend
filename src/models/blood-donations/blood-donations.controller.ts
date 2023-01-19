import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BloodDonationsService } from './blood-donations.service';
import { CreateBloodDonationDto } from './dto/create-blood-donation.dto';
import { UpdateBloodDonationDto } from './dto/update-blood-donation.dto';

@Controller('blood-donations')
export class BloodDonationsController {
  constructor(private readonly bloodDonationsService: BloodDonationsService) {}

  @Post()
  create(@Body() createBloodDonationDto: CreateBloodDonationDto) {
    return this.bloodDonationsService.create(createBloodDonationDto);
  }

  @Get()
  findAll() {
    return this.bloodDonationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodDonationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodDonationDto: UpdateBloodDonationDto,
  ) {
    return this.bloodDonationsService.update(+id, updateBloodDonationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodDonationsService.remove(+id);
  }
}
