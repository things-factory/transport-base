import { User } from '@things-factory/auth-base'
import { Lot, ProductBatch } from '@things-factory/product-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { TransportOrder } from './transport-order'

@Entity()
@Index(
  'ix_transport-order-detail_0',
  (transportOrderDetail: TransportOrderDetail) => [transportOrderDetail.domain, transportOrderDetail.name],
  { unique: true }
)
export class TransportOrderDetail {
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
