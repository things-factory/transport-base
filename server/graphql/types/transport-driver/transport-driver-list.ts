import gql from 'graphql-tag'

export const TransportDriverList = gql`
  type TransportDriverList {
    items: [TransportDriver]
    total: Int
  }
`
