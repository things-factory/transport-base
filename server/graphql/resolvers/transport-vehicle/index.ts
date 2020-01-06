import { createTransportVehicle, createTransportVehicleResolver } from './create-transport-vehicle'
import { deleteTransportVehicle } from './delete-transport-vehicle'
import { deleteTransportVehicles, deleteTransportVehiclesResolver } from './delete-transport-vehicles'
import { updateMultipleTransportVehicle } from './update-multiple-transport-vehicle'
import { updateTransportVehicle } from './update-transport-vehicle'
import { transportVehicleResolver } from './transport-vehicle'
import { transportVehiclesResolver } from './transport-vehicles'

export const Query = {
  ...transportVehiclesResolver,
  ...transportVehicleResolver
}

export const Mutation = {
  ...updateTransportVehicle,
  ...createTransportVehicleResolver,
  ...deleteTransportVehicle,
  ...deleteTransportVehiclesResolver,
  ...updateMultipleTransportVehicle
}

export { createTransportVehicle, updateTransportVehicle, deleteTransportVehicles, deleteTransportVehicle }
