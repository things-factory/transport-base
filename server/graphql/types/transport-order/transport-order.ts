import { gql } from 'apollo-server-koa'

export const TransportOrder = gql`
  type TransportOrder {
    id: String
    domain: Domain
    name: String
    from: String
    to: String
    when: String
    orderType: String
    loadType: String
    state: String
    details: [TransportOrderDetail]
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
