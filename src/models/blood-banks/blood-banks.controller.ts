import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BloodBanksService } from './blood-banks.service';
import { CreateBloodBankDto } from './dto/create-blood-bank.dto';
import { UpdateBloodBankDto } from './dto/update-blood-bank.dto';

@Controller('blood-banks')
export class BloodBanksController {
  constructor(private readonly bloodBanksService: BloodBanksService) {}

  @Post()
  create(@Body() createBloodBankDto: CreateBloodBankDto) {
    return this.bloodBanksService.create(createBloodBankDto);
  }

  @Get()
  findAll() {
    return this.bloodBanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodBanksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodBankDto: UpdateBloodBankDto,
  ) {
    return this.bloodBanksService.update(+id, updateBloodBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodBanksService.remove(+id);
  }
}
