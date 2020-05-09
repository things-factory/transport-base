import * as ShipmentProvider from './shipment-provider'
import * as TransportDriver from './transport-driver'
import * as TransportVehicle from './transport-vehicle'
import { Filter, Pagination, Sorting, ObjectRef } from '@things-factory/shell'

export const queries = [ShipmentProvider.Query, TransportDriver.Query, TransportVehicle.Query]

export const mutations = [ShipmentProvider.Mutation, TransportDriver.Mutation, TransportVehicle.Mutation]

export const types = [
  Filter,
  Pagination,
  Sorting,
  ObjectRef,
  ...ShipmentProvider.Types,
  ...TransportDriver.Types,
  ...TransportVehicle.Types
]
