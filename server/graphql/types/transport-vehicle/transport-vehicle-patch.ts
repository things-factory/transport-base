import { gql } from 'apollo-server-koa'

export const TransportVehiclePatch = gql`
  input TransportVehiclePatch {
    description: String
    regNumber: String!
    brand: String!
    model: String!
    color: String!
    size: String!
    status: String
  }
`
