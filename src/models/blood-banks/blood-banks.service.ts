import { Injectable } from '@nestjs/common';

import { CreateBloodBankDto } from './dto/create-blood-bank.dto';
import { UpdateBloodBankDto } from './dto/update-blood-bank.dto';

@Injectable()
export class BloodBanksService {
  create(createBloodBankDto: CreateBloodBankDto) {
    return 'This action adds a new bloodBank';
  }

  findAll() {
    return `This action returns all bloodBanks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodBank`;
  }

  update(id: number, updateBloodBankDto: UpdateBloodBankDto) {
    return `This action updates a #${id} bloodBank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodBank`;
  }
}
