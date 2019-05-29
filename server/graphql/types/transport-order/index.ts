import { TransportOrder } from './transport-order'
import { NewTransportOrder } from './new-transport-order'
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
  transportOrders: [TransportOrder]
  transportOrder(id: String!): TransportOrder
`

export const Types = [TransportOrder, NewTransportOrder, TransportOrderPatch]
