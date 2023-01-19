import { PartialType } from '@nestjs/swagger';

import { CreateBloodBankDto } from './create-blood-bank.dto';

export class UpdateBloodBankDto extends PartialType(CreateBloodBankDto) {}
