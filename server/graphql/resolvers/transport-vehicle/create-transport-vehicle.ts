import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const createTransportVehicle = {
  async createTransportVehicle(_, { transportVehicle: attrs }) {
    const repository = getRepository(TransportVehicle)
    const newTransportVehicle = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newTransportVehicle)
  }
}
