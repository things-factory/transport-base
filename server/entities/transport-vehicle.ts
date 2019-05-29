import { Entity, Index, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('transport-vehicles')
@Index(
  'ix_transport-vehicle_0',
  (transportVehicle: TransportVehicle) => [transportVehicle.domain, transportVehicle.regNumber],
  { unique: true }
)
export class TransportVehicle extends DomainBaseEntity {
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
}
