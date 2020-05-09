import * as ShipmentProvider from './shipment-provider'
import * as TransportDriver from './transport-driver'
import * as TransportVehicle from './transport-vehicle'

export const queries = [ShipmentProvider.Query, TransportDriver.Query, TransportVehicle.Query]

export const mutations = [ShipmentProvider.Mutation, TransportDriver.Mutation, TransportVehicle.Mutation]
