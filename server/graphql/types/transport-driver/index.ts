import { NewTransportDriver } from './new-transport-driver'
import { TransportDriver } from './transport-driver'
import { TransportDriverList } from './transport-driver-list'
import { TransportDriverPatch } from './transport-driver-patch'

export const Mutation = `
  createTransportDriver (
    transportDriver: NewTransportDriver!
  ): TransportDriver

  updateTransportDriver (
    name: String!
    patch: TransportDriverPatch!
  ): [TransportDriver]

  deleteTransportDriver (
    name: String!
  ): TransportDriver
  
  deleteTransportDrivers (
    names: [String]!
  ): Boolean

  updateMultipleTransportDriver (
    patches: [TransportDriverPatch]!
  ): [TransportDriver]

`

export const Query = `
  transportDrivers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportDriverList
  transportDriver(name: String!): TransportDriver
`

export const Types = [TransportDriver, NewTransportDriver, TransportDriverPatch, TransportDriverList]
