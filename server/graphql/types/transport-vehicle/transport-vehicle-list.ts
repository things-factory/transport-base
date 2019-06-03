import { gql } from 'apollo-server-koa'

export const TransportVehicleList = gql`
  type TransportVehicleList {
    items: [TransportVehicle]
    total: Int
  }
`
