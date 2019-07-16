import { gql } from 'apollo-server-koa'

export const TransportOrderPatch = gql`
  input TransportOrderPatch {
    name: String
    from: String
    to: String
    when: String
    orderType: String
    loadType: String
    state: String
    details: [String]
    description: String
  }
`
