import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { TransportOrder } from './transport-order'

@Entity('transport-order-details')
@Index(
  'ix_transport-order-detail_0',
  (transportOrderDetail: TransportOrderDetail) => [transportOrderDetail.domain, transportOrderDetail.name],
  { unique: true }
)
export class TransportOrderDetail extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  qty: string

  @Column('text')
  name: string

  @OneToMany(type => TransportOrder, transportOrder => transportOrder.details)
  transportOrder: TransportOrder

  @Column('text', {
    nullable: true
  })
  description: string
}
