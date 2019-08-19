import { transportVehicleResolver } from './transport-vehicle'
import { transportVehiclesResolver } from './transport-vehicles'
import { updateTransportVehicle } from './update-transport-vehicle'
import { updateMultipleTransportVehicle } from './update-multiple-transport-vehicle'
import { createTransportVehicle } from './create-transport-vehicle'
import { deleteTransportVehicle } from './delete-transport-vehicle'

export const Query = {
  ...transportVehiclesResolver,
  ...transportVehicleResolver
}

export const Mutation = {
  ...updateTransportVehicle,
  ...createTransportVehicle,
  ...deleteTransportVehicle,
  ...updateMultipleTransportVehicle
}
