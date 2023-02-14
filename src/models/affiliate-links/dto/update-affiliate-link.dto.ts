import { PartialType } from '@nestjs/swagger';
import { CreateAffiliateLinkDto } from './create-affiliate-link.dto';

export class UpdateAffiliateLinkDto extends PartialType(CreateAffiliateLinkDto) {}
