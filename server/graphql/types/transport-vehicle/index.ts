import { NewTransportVehicle } from './new-transport-vehicle'
import { TransportVehicle } from './transport-vehicle'
import { TransportVehicleList } from './transport-vehicle-list'
import { TransportVehiclePatch } from './transport-vehicle-patch'
import { directivePriviledge } from '@things-factory/auth-base'

export const Mutation = `
  createTransportVehicle (
    transportVehicle: NewTransportVehicle!
  ): TransportVehicle @priviledge(category: "transport", priviledge: "mutation" )

  updateTransportVehicle (
    name: String!
    patch: TransportVehiclePatch!
  ): [TransportVehicle] @priviledge(category: "transport", priviledge: "mutation" )

  updateMultipleTransportVehicle (
    patches: [TransportVehiclePatch]!
  ): [TransportVehicle] @priviledge(category: "transport", priviledge: "mutation" )

  deleteTransportVehicle (
    id: String!
  ): Boolean @priviledge(category: "transport", priviledge: "mutation" )

  deleteTransportVehicles (
    ids: [String]!
  ): Boolean @priviledge(category: "transport", priviledge: "mutation" )
`

export const Query = `
  transportVehicles(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TransportVehicleList @priviledge(category: "transport", priviledge: "query" )
  transportVehicle(name: String!): TransportVehicle @priviledge(category: "transport", priviledge: "query" )
`

export const Types = [TransportVehicle, NewTransportVehicle, TransportVehiclePatch, TransportVehicleList]
