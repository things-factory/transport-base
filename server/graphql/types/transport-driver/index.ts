import { TransportDriver } from './transport-driver'
import { NewTransportDriver } from './new-transport-driver'
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

  publishTransportDriver (
    id: String!
  ): TransportDriver
`

export const Query = `
  transportDrivers: [TransportDriver]
  transportDriver(id: String!): TransportDriver
`

export const Types = [TransportDriver, NewTransportDriver, TransportDriverPatch]
