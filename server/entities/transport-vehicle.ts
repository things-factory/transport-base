import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@Index(
  'ix_transport-vehicle_0',
  (transportVehicle: TransportVehicle) => [transportVehicle.domain, transportVehicle.regNumber],
  { unique: true }
)
export class TransportVehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  regNumber: string

  @Column('text')
  brand: string

  @Column('text')
  model: string

  @Column('text')
  color: string

  @Column('text')
  size: string

  @Column('text')
  status: string

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
