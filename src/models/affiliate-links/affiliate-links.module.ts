import { Module } from '@nestjs/common';
import { AffiliateLinksService } from './affiliate-links.service';
import { AffiliateLinksController } from './affiliate-links.controller';

@Module({
  controllers: [AffiliateLinksController],
  providers: [AffiliateLinksService]
})
export class AffiliateLinksModule {}
