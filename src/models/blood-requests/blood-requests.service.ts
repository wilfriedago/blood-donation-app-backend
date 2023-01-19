import { Injectable } from '@nestjs/common';

import { CreateBloodRequestDto } from './dto/create-blood-request.dto';
import { UpdateBloodRequestDto } from './dto/update-blood-request.dto';

@Injectable()
export class BloodRequestsService {
  create(createBloodRequestDto: CreateBloodRequestDto) {
    return 'This action adds a new bloodRequest';
  }

  findAll() {
    return `This action returns all bloodRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodRequest`;
  }

  update(id: number, updateBloodRequestDto: UpdateBloodRequestDto) {
    return `This action updates a #${id} bloodRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodRequest`;
  }
}
