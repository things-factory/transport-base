import { gql } from 'apollo-server-koa'

export const TransportVehicle = gql`
  type TransportVehicle {
    id: String
    domain: Domain
    description: String
    regNumber: String!
    brand: String!
    model: String!
    color: String!
    size: String!
    status: String
  }
`
