import { gql } from 'apollo-server-koa'

export const TransportOrderList = gql`
  input TransportOrderList {
    items: [TransportOrder]
    total: Int
  }
`
