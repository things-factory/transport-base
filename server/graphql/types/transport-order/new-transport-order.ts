import { gql } from 'apollo-server-koa'

export const NewTransportOrder = gql`
  input NewTransportOrder {
    name: String!
    description: String
    orderType: String
    from: String
    to: String
    when: Date
    loadType: String
  }
`
