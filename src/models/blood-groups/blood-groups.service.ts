import { Injectable } from '@nestjs/common';

import { CreateBloodGroupDto } from './dto/create-blood-group.dto';
import { UpdateBloodGroupDto } from './dto/update-blood-group.dto';

@Injectable()
export class BloodGroupsService {
  create(createBloodGroupDto: CreateBloodGroupDto) {
    return 'This action adds a new bloodGroup';
  }

  findAll() {
    return `This action returns all bloodGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodGroup`;
  }

  update(id: number, updateBloodGroupDto: UpdateBloodGroupDto) {
    return `This action updates a #${id} bloodGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodGroup`;
  }
}
