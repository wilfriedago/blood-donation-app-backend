import { Injectable } from '@nestjs/common';
import { CreateDonorCardDto } from './dto/create-donor-card.dto';
import { UpdateDonorCardDto } from './dto/update-donor-card.dto';

@Injectable()
export class DonorCardsService {
  create(createDonorCardDto: CreateDonorCardDto) {
    return 'This action adds a new donorCard';
  }

  findAll() {
    return `This action returns all donorCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donorCard`;
  }

  update(id: number, updateDonorCardDto: UpdateDonorCardDto) {
    return `This action updates a #${id} donorCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} donorCard`;
  }
}
