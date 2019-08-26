import { NewTransportVehicle } from './new-transport-vehicle'
import { TransportVehicle } from './transport-vehicle'
import { TransportVehicleList } from './transport-vehicle-list'
import { TransportVehiclePatch } from './transport-vehicle-patch'

export const Mutation = `
  createTransportVehicle (
    transportVehicle: NewTransportVehicle!
  ): TransportVehicle

  updateTransportVehicle (
    name: String!
    patch: TransportVehiclePatch!
  ): [TransportVehicle]

  updateMultipleTransportVehicle (
    patches: [TransportVehiclePatch]!
  ): [TransportVehicle]

  deleteTransportVehicle (
    name: String!
  ): Boolean

  deleteTransportVehicles (
    names: [String]!
  ): Boolean
`

export const Query = `
  transportVehicles(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportVehicleList
  transportVehicle(name: String!): TransportVehicle
`

export const Types = [TransportVehicle, NewTransportVehicle, TransportVehiclePatch, TransportVehicleList]
