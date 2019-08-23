import { createTransportDriver } from './create-transport-driver'
import { deleteTransportDriver } from './delete-transport-driver'
import { deleteTransportDrivers } from './delete-transport-drivers'
import { transportDriverResolver } from './transport-driver'
import { transportDriversResolver } from './transport-drivers'
import { updateMultipleTransportDriver } from './update-multiple-transport-driver'
import { updateTransportDriver } from './update-transport-driver'

export const Query = {
  ...transportDriversResolver,
  ...transportDriverResolver
}

export const Mutation = {
  ...updateTransportDriver,
  ...updateMultipleTransportDriver,
  ...createTransportDriver,
  ...deleteTransportDriver,
  ...deleteTransportDrivers
}
