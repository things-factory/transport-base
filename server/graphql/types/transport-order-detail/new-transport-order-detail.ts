import { gql } from 'apollo-server-koa'

export const NewTransportOrderDetail = gql`
  input NewTransportOrderDetail {
    productBatch: String!
    lot: String!
    qty: Int!
    name: String!
    transportOrder: String!
    description: String
  }
`
