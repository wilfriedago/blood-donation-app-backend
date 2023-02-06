import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Roles } from '@/roles/roles.decorator';
import { RoleEnum } from '@/roles/roles.enum';
import { RolesGuard } from '@/roles/roles.guard';
import { infinityPagination } from '@/utils/infinity-pagination';

import { BloodGroupsService } from './blood-groups.service';
import { CreateBloodGroupDto } from './dto/create-blood-group.dto';
import { UpdateBloodGroupDto } from './dto/update-blood-group.dto';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('BloodGroups')
@Controller({
  path: 'blood-groups',
  version: '1',
})
export class BloodGroupsController {
  constructor(private readonly bloodGroupsService: BloodGroupsService) {}

  @SerializeOptions({
    groups: ['admin', 'superAdmin'],
  })
  @Roles(RoleEnum.admin, RoleEnum.superAdmin)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProfileDto: CreateBloodGroupDto) {
    return await this.bloodGroupsService.create(createProfileDto);
  }

  @SerializeOptions({
    groups: ['admin', 'donor', 'hospital', 'bloodBank', 'superAdmin'],
  })
  @Roles(
    RoleEnum.admin,
    RoleEnum.donor,
    RoleEnum.hospital,
    RoleEnum.bloodBank,
    RoleEnum.superAdmin,
  )
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    if (limit > 50) limit = 50;

    return infinityPagination(
      await this.bloodGroupsService.findManyWithPagination({ page, limit }),
      { page, limit },
    );
  }

  @SerializeOptions({
    groups: ['admin', 'superAdmin'],
  })
  @Roles(RoleEnum.admin, RoleEnum.superAdmin)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return await this.bloodGroupsService.findOne({ id: +id });
  }

  @SerializeOptions({
    groups: ['admin', 'superAdmin'],
  })
  @Roles(RoleEnum.admin, RoleEnum.superAdmin)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateBloodGroupDto,
  ) {
    return await this.bloodGroupsService.update(+id, updateProfileDto);
  }

  @SerializeOptions({
    groups: ['admin', 'superAdmin'],
  })
  @Roles(RoleEnum.admin, RoleEnum.superAdmin)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    await this.bloodGroupsService.softDelete(+id);
  }
}
