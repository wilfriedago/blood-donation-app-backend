import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BloodGroupsService } from './blood-groups.service';
import { CreateBloodGroupDto } from './dto/create-blood-group.dto';
import { UpdateBloodGroupDto } from './dto/update-blood-group.dto';

@Controller('blood-groups')
export class BloodGroupsController {
  constructor(private readonly bloodGroupsService: BloodGroupsService) {}

  @Post()
  create(@Body() createBloodGroupDto: CreateBloodGroupDto) {
    return this.bloodGroupsService.create(createBloodGroupDto);
  }

  @Get()
  findAll() {
    return this.bloodGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodGroupDto: UpdateBloodGroupDto,
  ) {
    return this.bloodGroupsService.update(+id, updateBloodGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodGroupsService.remove(+id);
  }
}
