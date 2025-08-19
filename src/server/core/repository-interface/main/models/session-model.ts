import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'pp_session' })
class SessionModel {
  @PrimaryGeneratedColumn({ name: '__pk_pp_session' })
  id?: number;
  @Column({ name: '_fk_user' })
  userId?: number;
  @Column({ name: 'session_id' })
  sessionId?: string;
  @Column({ type: 'datetime', precision: 6, name: 'expires_at' })
  expiresAt?: Date;
  @Column({ name: 'ip_addresses' })
  ipAddresses?: string;
  @Column({ name: 'user_agent' })
  userAgent?: string;
  @UpdateDateColumn({ type: 'datetime', precision: 6, name: 'last_modified_date' })
  lastModifiedDate?: Date;
  @CreateDateColumn({ type: 'datetime', precision: 6, name: 'creation_date' })
  creationDate?: Date;
}

export default SessionModel;
