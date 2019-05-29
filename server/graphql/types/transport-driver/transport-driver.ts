import { gql } from 'apollo-server-koa'

export const TransportDriver = gql`
  type TransportDriver {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
