import { gql } from 'apollo-server-koa'

export const TransportVehiclePatch = gql`
  input TransportVehiclePatch {
    name: String
    regNumber: String
    size: String
    status: String
    description: String
    cuFlag: String
  }
`
