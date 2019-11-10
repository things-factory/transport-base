import gql from 'graphql-tag'

export const TransportVehicleList = gql`
  type TransportVehicleList {
    items: [TransportVehicle]
    total: Int
  }
`
