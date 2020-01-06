import { createTransportDriver, createTransportDriverResolver } from './create-transport-driver'
import { deleteTransportDriver } from './delete-transport-driver'
import { deleteTransportDrivers, deleteTransportDriversResolver } from './delete-transport-drivers'
import { updateMultipleTransportDriver } from './update-multiple-transport-driver'
import { updateTransportDriver } from './update-transport-driver'
import { transportDriverResolver } from './transport-driver'
import { transportDriversResolver } from './transport-drivers'

export const Query = {
  ...transportDriversResolver,
  ...transportDriverResolver
}

export const Mutation = {
  ...updateTransportDriver,
  ...createTransportDriverResolver,
  ...deleteTransportDriver,
  ...deleteTransportDriversResolver,
  ...updateMultipleTransportDriver
}

export { createTransportDriver, updateTransportDriver, deleteTransportDrivers, deleteTransportDriver }
