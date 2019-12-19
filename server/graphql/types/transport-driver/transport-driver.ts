import gql from 'graphql-tag'

export const TransportDriver = gql`
  type TransportDriver {
    id: String
    domain: Domain
    bizplace: Bizplace
    name: String
    description: String
    driverCode: String
    bizplace: Bizplace
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
