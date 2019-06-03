import { gql } from 'apollo-server-koa'

export const TransportDriverList = gql`
  input TransportDriverList {
    items: [TransportDriver]
    total: Int
  }
`
