import { TransportOrderDetail } from './transport-order-detail'
import { NewTransportOrderDetail } from './new-transport-order-detail'
import { TransportOrderDetailPatch } from './transport-order-detail-patch'

export const Mutation = `
  createTransportOrderDetail (
    transportOrderDetail: NewTransportOrderDetail!
  ): TransportOrderDetail

  updateTransportOrderDetail (
    id: String!
    patch: TransportOrderDetailPatch!
  ): TransportOrderDetail

  deleteTransportOrderDetail (
    id: String!
  ): TransportOrderDetail

  publishTransportOrderDetail (
    id: String!
  ): TransportOrderDetail
`

export const Query = `
  transportOrderDetails: [TransportOrderDetail]
  transportOrderDetail(id: String!): TransportOrderDetail
`

export const Types = [TransportOrderDetail, NewTransportOrderDetail, TransportOrderDetailPatch]
