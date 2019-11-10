import gql from 'graphql-tag'

export const TransportDriverPatch = gql`
  input TransportDriverPatch {
    id: String
    bizplace: ObjectRef
    name: String
    description: String
    driverCode: String
    cuFlag: String
  }
`
