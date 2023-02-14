import { PartialType } from '@nestjs/swagger';
import { CreateBloodSupplyDto } from './create-blood-supply.dto';

export class UpdateBloodSupplyDto extends PartialType(CreateBloodSupplyDto) {}
