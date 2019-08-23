import { gql } from 'apollo-server-koa'

export const NewTransportDriver = gql`
  input NewTransportDriver {
    bizplace: ObjectRef!
    name: String!
    description: String
    driverCode: String!
  }
`
