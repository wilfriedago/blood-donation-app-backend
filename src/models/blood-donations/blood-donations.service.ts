import { Injectable } from '@nestjs/common';

import { CreateBloodDonationDto } from './dto/create-blood-donation.dto';
import { UpdateBloodDonationDto } from './dto/update-blood-donation.dto';

@Injectable()
export class BloodDonationsService {
  create(createBloodDonationDto: CreateBloodDonationDto) {
    return 'This action adds a new bloodDonation';
  }

  findAll() {
    return `This action returns all bloodDonations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodDonation`;
  }

  update(id: number, updateBloodDonationDto: UpdateBloodDonationDto) {
    return `This action updates a #${id} bloodDonation`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodDonation`;
  }
}
