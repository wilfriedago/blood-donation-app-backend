import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityCondition } from '@/utils/types/entity-condition.type';
import { IPaginationOptions } from '@/utils/types/pagination-options';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}

  async create(createProfileDto: CreateAppointmentDto): Promise<Appointment> {
    return await this.appointmentsRepository.save(
      this.appointmentsRepository.create(createProfileDto),
    );
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<[Appointment[], number]> {
    const { page, limit } = paginationOptions;
    return await this.appointmentsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      cache: true,
    });
  }

  async findOne(fields: EntityCondition<Appointment>): Promise<Appointment> {
    return await this.appointmentsRepository.findOne({
      where: fields,
    });
  }

  async update(
    id: number,
    updateProfileDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    return await this.appointmentsRepository.save({
      id,
      ...updateProfileDto,
    });
  }

  async softDelete(id: number): Promise<void> {
    await this.appointmentsRepository.softDelete(id);
  }
}
