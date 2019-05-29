import { gql } from 'apollo-server-koa'

export const TransportOrderPatch = gql`
  input TransportOrderPatch {
    name: String
    description: String
    orderType: String
    from: String
    to: String
    when: Date
    loadType: String
  }
`
