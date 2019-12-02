import gql from 'graphql-tag'

export const TransportVehiclePatch = gql`
  input TransportVehiclePatch {
    id: String
    name: String
    regNumber: String
    size: String
    status: String
    description: String
    cuFlag: String
  }
`
