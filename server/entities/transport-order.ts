import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { TransportOrderDetail } from './transport-order-detail'

@Entity('transport-orders')
@Index('ix_transport-order_0', (transportOrder: TransportOrder) => [transportOrder.domain, transportOrder.name], {
  unique: true
})
export class TransportOrder {
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

  @Column('text')
  state: string

  @OneToMany(type => TransportOrderDetail, transportOrderDetail => transportOrderDetail.transportOrder)
  details: TransportOrderDetail[]

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
