import { gql } from 'apollo-server-koa'

export const TransportOrderDetailPatch = gql`
  input TransportOrderDetailPatch {
    name: String
    description: String
  }
`
