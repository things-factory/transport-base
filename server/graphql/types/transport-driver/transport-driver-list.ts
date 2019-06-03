import { gql } from 'apollo-server-koa'

export const TransportDriverList = gql`
  type TransportDriverList {
    items: [TransportDriver]
    total: Int
  }
`
