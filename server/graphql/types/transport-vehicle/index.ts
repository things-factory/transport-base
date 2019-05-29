import { TransportVehicle } from './transport-vehicle'
import { NewTransportVehicle } from './new-transport-vehicle'
import { TransportVehiclePatch } from './transport-vehicle-patch'

export const Mutation = `
  createTransportVehicle (
    transportVehicle: NewTransportVehicle!
  ): TransportVehicle

  updateTransportVehicle (
    id: String!
    patch: TransportVehiclePatch!
  ): TransportVehicle

  deleteTransportVehicle (
    id: String!
  ): TransportVehicle

  publishTransportVehicle (
    id: String!
  ): TransportVehicle
`

export const Query = `
  transportVehicles: [TransportVehicle]
  transportVehicle(id: String!): TransportVehicle
`

export const Types = [TransportVehicle, NewTransportVehicle, TransportVehiclePatch]
