import gql from 'graphql-tag'

export const TransportVehiclePatch = gql`
  input TransportVehiclePatch {
    id: String
    bizplace: ObjectRef
    name: String
    regNumber: String
    size: String
    status: String
    description: String
    cuFlag: String
  }
`
