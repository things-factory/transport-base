import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewTransportOrder } from './new-transport-order'
import { TransportOrder } from './transport-order'
import { TransportOrderList } from './transport-order-list'
import { TransportOrderPatch } from './transport-order-patch'

export const Mutation = `
  createTransportOrder (
    transportOrder: NewTransportOrder!
  ): TransportOrder

  updateTransportOrder (
    id: String!
    patch: TransportOrderPatch!
  ): TransportOrder

  deleteTransportOrder (
    id: String!
  ): TransportOrder

  publishTransportOrder (
    id: String!
  ): TransportOrder
`

export const Query = `
  transportOrders(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportOrderList
  transportOrder(id: String!): TransportOrder
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  TransportOrder,
  NewTransportOrder,
  TransportOrderPatch,
  TransportOrderList
]
