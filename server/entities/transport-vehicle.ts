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

  @Column()
  regNumber: string

  @Column()
  brand: string

  @Column()
  model: string

  @Column()
  color: string

  @Column()
  size: string

  @Column()
  status: string

  @Column({
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
