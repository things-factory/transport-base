import { gql } from 'apollo-server-koa'

export const TransportVehicle = gql`
  type TransportVehicle {
    id: String
    name: String
    domain: Domain
    bizplace: Bizplace
    regNumber: String
    size: String
    status: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
