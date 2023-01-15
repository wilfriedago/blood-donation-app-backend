import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Status extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryColumn()
  id: number;

  @Allow()
  @ApiProperty({ example: 'Active' })
  @Column()
  name?: string;
}
