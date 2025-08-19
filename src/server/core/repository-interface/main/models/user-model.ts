import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import SessionModel from './session-model';

export enum LoginFrom {
  LANDING = 'landing',
  MODELING = 'modeling',
}

@Entity({ name: 'pp_user' })
class UserModel {
  @PrimaryGeneratedColumn({ name: '__pk_pp_user' })
  id?: number;
  @Column()
  email?: string;
  @Column()
  name?: string;
  @Column({ name: 'sub_id' })
  subId?: number;
  @Column()
  sub?: string;
  @Column({
    type: 'enum',
    enum: LoginFrom,
    default: LoginFrom.LANDING,
    name: 'login_from',
  })
  loginFrom?: LoginFrom;
  @Column()
  picture?: string;
  @Column({ type: 'datetime', precision: 6, name: 'last_login_at' })
  lastLoginAt?: Date;
  @UpdateDateColumn({ type: 'datetime', precision: 6, name: 'last_modified_date' })
  lastModifiedDate?: Date;
  @CreateDateColumn({ type: 'datetime', precision: 6, name: 'creation_date' })
  creationDate?: Date;

  @OneToMany(() => SessionModel, (session) => session.userId)
  sessions?: SessionModel[];
}

export default UserModel;
