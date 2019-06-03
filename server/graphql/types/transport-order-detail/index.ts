import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewTransportOrderDetail } from './new-transport-order-detail'
import { TransportOrderDetail } from './transport-order-detail'
import { TransportOrderDetailList } from './transport-order-detail-list'
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
  transportOrderDetails(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportOrderDetailList
  transportOrderDetail(id: String!): TransportOrderDetail
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  TransportOrderDetail,
  NewTransportOrderDetail,
  TransportOrderDetailPatch,
  TransportOrderDetailList
]
