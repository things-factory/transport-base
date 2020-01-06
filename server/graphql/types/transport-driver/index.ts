import { NewTransportDriver } from './new-transport-driver'
import { TransportDriver } from './transport-driver'
import { TransportDriverList } from './transport-driver-list'
import { TransportDriverPatch } from './transport-driver-patch'

export const Mutation = `
  createTransportDriver (
    transportDriver: NewTransportDriver!
  ): TransportDriver @priviledge(category: "transport", priviledge: "mutation")

  updateTransportDriver (
    id: String!
    patch: TransportDriverPatch!
  ): [TransportDriver] @priviledge(category: "transport", priviledge: "mutation")

  deleteTransportDriver (
    id: String!
  ): Boolean @priviledge(category: "transport", priviledge: "mutation")
  
  deleteTransportDrivers (
    ids: [String]!
  ): Boolean @priviledge(category: "transport", priviledge: "mutation")

  updateMultipleTransportDriver (
    patches: [TransportDriverPatch]!
  ): [TransportDriver] @priviledge(category: "transport", priviledge: "mutation")

`

export const Query = `
  transportDrivers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportDriverList @priviledge(category: "transport", priviledge: "query")
  transportDriver(name: String!): TransportDriver @priviledge(category: "transport", priviledge: "query")
`

export const Types = [TransportDriver, NewTransportDriver, TransportDriverPatch, TransportDriverList]
