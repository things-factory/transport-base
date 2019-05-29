import { gql } from 'apollo-server-koa'

export const NewTransportVehicle = gql`
  input NewTransportVehicle {
    description: String
    regNumber: String!
    brand: String!
    model: String!
    color: String!
    size: String!
    status: String
  }
`
