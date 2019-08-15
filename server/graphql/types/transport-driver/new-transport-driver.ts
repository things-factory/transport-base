import { gql } from 'apollo-server-koa'

export const NewTransportDriver = gql`
  input NewTransportDriver {
    name: String!
    description: String
    driverCode: String!
  }
`
