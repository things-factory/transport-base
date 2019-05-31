import { Entity, Index, Column, OneToMany, OneToOne, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { TransportOrder } from './transport-order'
import { ProductBatch, Lot } from '@things-factory/product-base'

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

  @ManyToOne(type => ProductBatch)
  productBatch: ProductBatch

  @OneToOne(type => Lot)
  lot: Lot

  @Column('float')
  qty: number

  @Column('text')
  name: string

  @ManyToOne(type => TransportOrder, transportOrder => transportOrder.details)
  transportOrder: TransportOrder

  @Column('text', {
    nullable: true
  })
  description: string
}
