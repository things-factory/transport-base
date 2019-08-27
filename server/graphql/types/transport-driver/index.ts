import { NewTransportDriver } from './new-transport-driver'
import { TransportDriver } from './transport-driver'
import { TransportDriverList } from './transport-driver-list'
import { TransportDriverPatch } from './transport-driver-patch'

export const Mutation = `
  createTransportDriver (
    transportDriver: NewTransportDriver!
  ): TransportDriver @priviledge(category: "transport", priviledge: "mutation")

  updateTransportDriver (
    name: String!
    patch: TransportDriverPatch!
  ): [TransportDriver] @priviledge(category: "transport", priviledge: "mutation")

  deleteTransportDriver (
    name: String!
  ): Boolean @priviledge(category: "transport", priviledge: "mutation")
  
  deleteTransportDrivers (
    names: [String]!
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
