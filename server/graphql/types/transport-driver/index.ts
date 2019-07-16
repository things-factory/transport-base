import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewTransportDriver } from './new-transport-driver'
import { TransportDriver } from './transport-driver'
import { TransportDriverList } from './transport-driver-list'
import { TransportDriverPatch } from './transport-driver-patch'

export const Mutation = `
  createTransportDriver (
    transportDriver: NewTransportDriver!
  ): TransportDriver

  updateTransportDriver (
    id: String!
    patch: TransportDriverPatch!
  ): TransportDriver

  deleteTransportDriver (
    id: String!
  ): TransportDriver
`

export const Query = `
  transportDrivers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportDriverList
  transportDriver(id: String!): TransportDriver
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  TransportDriver,
  NewTransportDriver,
  TransportDriverPatch,
  TransportDriverList
]
