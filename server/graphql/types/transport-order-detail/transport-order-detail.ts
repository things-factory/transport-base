import { gql } from 'apollo-server-koa'

export const TransportOrderDetail = gql`
  type TransportOrderDetail {
    id: String
    domain: Domain
    productBatch: ProductBatch
    lot: Lot
    qty: Int
    name: String
    transportOrder: TransportOrder
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
