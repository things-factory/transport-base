import gql from 'graphql-tag'

export const NewTransportDriver = gql`
  input NewTransportDriver {
    bizplace: ObjectRef!
    name: String!
    description: String
    driverCode: String!
  }
`
