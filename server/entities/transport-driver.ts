import { Entity, Index, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('transport-drivers')
@Index('ix_transport-driver_0', (transportDriver: TransportDriver) => [transportDriver.domain, transportDriver.name], {
  unique: true
})
export class TransportDriver extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string
}
