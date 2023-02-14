import { Injectable } from '@nestjs/common';
import { CreateAffiliateLinkDto } from './dto/create-affiliate-link.dto';
import { UpdateAffiliateLinkDto } from './dto/update-affiliate-link.dto';

@Injectable()
export class AffiliateLinksService {
  create(createAffiliateLinkDto: CreateAffiliateLinkDto) {
    return 'This action adds a new affiliateLink';
  }

  findAll() {
    return `This action returns all affiliateLinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} affiliateLink`;
  }

  update(id: number, updateAffiliateLinkDto: UpdateAffiliateLinkDto) {
    return `This action updates a #${id} affiliateLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} affiliateLink`;
  }
}
