import * as TransportDriver from './transport-driver'
import * as TransportVehicle from './transport-vehicle'
import * as TransportOrder from './transport-order'
import * as TransportOrderDetail from './transport-order-detail'

export const queries = [TransportDriver.Query, TransportVehicle.Query, TransportOrder.Query, TransportOrderDetail.Query]

export const mutations = [
  TransportDriver.Mutation,
  TransportVehicle.Mutation,
  TransportOrder.Mutation,
  TransportOrderDetail.Mutation
]

export const types = [
  ...TransportDriver.Types,
  ...TransportVehicle.Types,
  ...TransportOrder.Types,
  ...TransportOrderDetail.Types
]
