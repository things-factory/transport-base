import { gql } from 'apollo-server-koa'

export const TransportOrderDetail = gql`
  type TransportOrderDetail {
    id: String
    name: String
    domain: Domain
    description: String
    TransportOrderDetails: TransportOrderDetail
  }
`
