import { gql } from 'apollo-server-koa'

export const TransportOrderDetailPatch = gql`
  input TransportOrderDetailPatch {
    productBatch: String
    lot: String
    qty: Int
    name: String
    transportOrder: [String]
    description: String
  }
`
