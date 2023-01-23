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
import { User } from '@/models/users/entities/user.entity';
import { IsExist } from '@/utils/validators/is-exists.validator';

export class CreateDonorDto {
  @ApiProperty({ example: 'John' })
  @MinLength(2, {
    message: 'firstNameTooShort',
  })
  @MaxLength(128, {
    message: 'firstNameTooLong',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @MinLength(2, {
    message: 'lastNameTooShort',
  })
  @MaxLength(128, {
    message: 'lastNameTooLong',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ type: User })
  @Validate(IsExist, ['User', 'id'], {
    message: 'userNotExists',
  })
  @IsNotEmpty()
  user: User;

  @ApiProperty({ example: 'John Doe Mansion ' })
  @IsOptional()
  address?: string | null;

  @ApiProperty({ example: '01/01/1970' })
  @IsOptional()
  birthDate?: Date | null;

  @ApiProperty({ example: 'Male' })
  @IsOptional()
  gender?: string | null;

  @ApiProperty({ type: BloodGroup })
  @Validate(IsExist, ['BloodGroup', 'id'], {
    message: 'bloodGroupNotExists',
  })
  @IsOptional()
  bloodGroup?: BloodGroup | null;
}
