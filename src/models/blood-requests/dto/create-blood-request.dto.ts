import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

import { BloodGroup } from '@/models/blood-groups/entities/blood-group.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { IsExist } from '@/utils/validators/is-exists.validator';

export class CreateBloodRequestDto {
  @ApiProperty({ example: 'Blood Request 1' })
  @MinLength(2, {
    message: 'nameTooShort',
  })
  @MaxLength(128, {
    message: 'nameTooLong',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Blood Request 1 Description' })
  @IsOptional()
  description?: string | null;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  quantityRequested: number;

  @ApiProperty({ type: BloodGroup })
  @Validate(IsExist, ['BloodGroup', 'id'], {
    message: 'bloodGroupNotExists',
  })
  @IsNotEmpty()
  bloodGroup: BloodGroup;

  @ApiProperty({ type: Hospital })
  @Validate(IsExist, ['Hospital', 'id'], {
    message: 'hospitalNotExists',
  })
  @IsNotEmpty()
  hospital: Hospital;
}
