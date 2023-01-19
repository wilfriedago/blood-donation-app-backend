import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BloodRequestsService } from './blood-requests.service';
import { CreateBloodRequestDto } from './dto/create-blood-request.dto';
import { UpdateBloodRequestDto } from './dto/update-blood-request.dto';

@Controller('blood-requests')
export class BloodRequestsController {
  constructor(private readonly bloodRequestsService: BloodRequestsService) {}

  @Post()
  create(@Body() createBloodRequestDto: CreateBloodRequestDto) {
    return this.bloodRequestsService.create(createBloodRequestDto);
  }

  @Get()
  findAll() {
    return this.bloodRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodRequestDto: UpdateBloodRequestDto,
  ) {
    return this.bloodRequestsService.update(+id, updateBloodRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodRequestsService.remove(+id);
  }
}
