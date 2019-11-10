import gql from 'graphql-tag'

export const NewTransportVehicle = gql`
  input NewTransportVehicle {
    name: String!
    bizplace: ObjectRef!
    regNumber: String!
    size: String!
    status: String!
    description: String
  }
`
