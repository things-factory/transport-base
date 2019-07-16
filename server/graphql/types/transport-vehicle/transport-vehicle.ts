import { gql } from 'apollo-server-koa'

export const TransportVehicle = gql`
  type TransportVehicle {
    id: String
    domain: Domain
    regNumber: String
    brand: String
    model: String
    color: String
    size: String
    status: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
