import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehiclesResolver = {
  async transportVehicles() {
    const repository = getRepository(TransportVehicle)

    return await repository.find()
  }
}
