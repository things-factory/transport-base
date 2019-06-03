import { gql } from 'apollo-server-koa'

export const TransportVehicleList = gql`
  input TransportVehicleList {
    items: [TransportVehicle]
    total: Int
  }
`
