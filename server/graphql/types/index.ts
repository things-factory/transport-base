import * as TransportDriver from './transport-driver'
import * as TransportVehicle from './transport-vehicle'
import { Filter, Pagination, Sorting, ObjectRef } from '@things-factory/shell'

export const queries = [TransportDriver.Query, TransportVehicle.Query]

export const mutations = [TransportDriver.Mutation, TransportVehicle.Mutation]

export const types = [Filter, Pagination, Sorting, ObjectRef, ...TransportDriver.Types, ...TransportVehicle.Types]
