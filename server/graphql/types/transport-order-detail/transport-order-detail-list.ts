import { gql } from 'apollo-server-koa'

export const TransportOrderDetailList = gql`
  input TransportOrderDetailList {
    items: [TransportOrderDetail]
    total: Int
  }
`
