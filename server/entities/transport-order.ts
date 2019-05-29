import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { TransportOrderDetail } from './transport-order-detail'

@Entity('transport-orders')
@Index('ix_transport-order_0', (transportOrder: TransportOrder) => [transportOrder.domain, transportOrder.name], {
  unique: true
})
export class TransportOrder extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  from: string

  @Column('text')
  to: string

  @Column('datetime')
  when: Date

  @Column('text')
  orderType: string

  @Column('text')
  loadType: string

  @OneToMany(type => TransportOrderDetail, transportOrderDetail => transportOrderDetail.transportOrder)
  details: TransportOrderDetail[]

  @Column('text', {
    nullable: true
  })
  description: string
}
