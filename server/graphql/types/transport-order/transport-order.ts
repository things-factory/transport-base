import { gql } from 'apollo-server-koa'

export const TransportOrder = gql`
  type TransportOrder {
    id: String
    name: String
    domain: Domain
    description: String
    orderType: String
    from: String
    to: String
    when: Date
    loadType: String
  }
`
