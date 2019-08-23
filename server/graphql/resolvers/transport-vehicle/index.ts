import { createTransportVehicle } from './create-transport-vehicle'
import { deleteTransportVehicle } from './delete-transport-vehicle'
import { deleteTransportVehicles } from './delete-transport-vehicles'
import { transportVehicleResolver } from './transport-vehicle'
import { transportVehiclesResolver } from './transport-vehicles'
import { updateMultipleTransportVehicle } from './update-multiple-transport-vehicle'
import { updateTransportVehicle } from './update-transport-vehicle'

export const Query = {
  ...transportVehiclesResolver,
  ...transportVehicleResolver
}

export const Mutation = {
  ...updateTransportVehicle,
  ...createTransportVehicle,
  ...deleteTransportVehicle,
  ...updateMultipleTransportVehicle,
  ...deleteTransportVehicles
}
