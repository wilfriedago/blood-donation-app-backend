import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

import { BloodRequest } from '@/models/blood-requests/entities/blood-request.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { IsExist } from '@/utils/validators/is-exists.validator';

export class CreateBloodSupplyDto {
  @ApiProperty({ example: 'Blood Supply 1' })
  @MinLength(2, {
    message: 'nameTooShort',
  })
  @MaxLength(128, {
    message: 'nameTooLong',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Blood Supply 1 Description' })
  @IsOptional()
  description?: string | null;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  quantitySupplied: number;

  @ApiProperty({ type: BloodRequest })
  @Validate(IsExist, ['BloodRequest', 'id'], {
    message: 'bloodRequestNotExists',
  })
  @IsNotEmpty()
  bloodRequest: BloodRequest;

  @ApiProperty({ type: Hospital })
  @Validate(IsExist, ['Hospital', 'id'], {
    message: 'hospitalNotExists',
  })
  @IsNotEmpty()
  hospital: Hospital;
}
