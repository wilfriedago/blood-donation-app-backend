import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

import { User } from '@/models/users/entities/user.entity';
import { IsExist } from '@/utils/validators/is-exists.validator';

export class CreateHospitalDto {
  @ApiProperty({ example: 'John Company' })
  @MinLength(2, {
    message: 'nameTooShort',
  })
  @MaxLength(256, {
    message: 'nameTooLong',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Doe Company description' })
  @MinLength(2, {
    message: 'descriptionTooShort',
  })
  @MaxLength(2048, {
    message: 'descriptionTooLong',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'John Doe Mansion ' })
  @IsOptional()
  address?: string | null;

  @ApiProperty({ type: User })
  @Validate(IsExist, ['User', 'id'], {
    message: 'userNotExists',
  })
  @IsNotEmpty()
  user: User;
}
