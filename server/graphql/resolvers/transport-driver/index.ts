import { transportDriverResolver } from './transport-driver'
import { transportDriversResolver } from './transport-drivers'

import { updateTransportDriver } from './update-transport-driver'
import { createTransportDriver } from './create-transport-driver'
import { deleteTransportDriver } from './delete-transport-driver'

export const Query = {
  ...transportDriversResolver,
  ...transportDriverResolver
}

export const Mutation = {
  ...updateTransportDriver,
  ...createTransportDriver,
  ...deleteTransportDriver
}
