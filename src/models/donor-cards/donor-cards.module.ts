import { Module } from '@nestjs/common';
import { DonorCardsService } from './donor-cards.service';
import { DonorCardsController } from './donor-cards.controller';

@Module({
  controllers: [DonorCardsController],
  providers: [DonorCardsService]
})
export class DonorCardsModule {}
