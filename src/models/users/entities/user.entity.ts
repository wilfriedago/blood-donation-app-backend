import * as bcrypt from 'bcryptjs';
import { Exclude, Expose } from 'class-transformer';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AuthProvidersEnum } from '@/auth/auth-credentials/auth-providers.enum';
import { FileEntity } from '@/files/entities/file.entity';
import { BloodBank } from '@/models/blood-banks/entities/blood-bank.entity';
import { Donor } from '@/models/donors/entities/donor.entity';
import { Hospital } from '@/models/hospitals/entities/hospital.entity';
import { Role } from '@/roles/entities/role.entity';
import { Status } from '@/statuses/entities/status.entity';
import { EntityHelper } from '@/utils/entity-helper';

@Entity()
export class User extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  @Expose({ groups: ['me', 'admin'] })
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Exclude({ toPlainOnly: true })
  public previousPassword: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (this.previousPassword !== this.password && this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  @Column({ default: AuthProvidersEnum.email })
  @Expose({ groups: ['me', 'admin'] })
  provider: string;

  @Index()
  @Column({ nullable: true })
  @Expose({ groups: ['me', 'admin'] })
  socialId: string | null;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

  @ManyToOne(() => Role, {
    eager: true,
  })
  role?: Role | null;

  @ManyToOne(() => Status, {
    eager: true,
  })
  status?: Status;

  @Column({ nullable: true })
  @Index()
  @Exclude({ toPlainOnly: true })
  hash: string | null;

  @OneToOne(() => Donor, (donor: Donor) => donor.user, {
    onDelete: 'CASCADE',
  })
  donor: Donor;

  @OneToOne(() => Hospital, (hospital: Hospital) => hospital.user, {
    onDelete: 'CASCADE',
  })
  hospital: Hospital;

  @OneToOne(() => BloodBank, (bloodBank: BloodBank) => bloodBank.user, {
    onDelete: 'CASCADE',
  })
  bloodBank: BloodBank;
}
