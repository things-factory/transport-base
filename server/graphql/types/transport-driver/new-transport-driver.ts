import gql from 'graphql-tag'

export const NewTransportDriver = gql`
  input NewTransportDriver {
    name: String!
    description: String
    driverCode: String!
  }
`
