import { gql } from 'apollo-server-koa'

export const TransportDriverPatch = gql`
  input TransportDriverPatch {
    name: String
    description: String
    driverCode: String
    updatedAt: String
    updater: String
  }
`
