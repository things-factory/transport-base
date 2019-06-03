import { gql } from 'apollo-server-koa'

export const TransportOrderList = gql`
  type TransportOrderList {
    items: [TransportOrder]
    total: Int
  }
`
