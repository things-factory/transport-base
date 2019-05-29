import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehicleResolver = {
  async transportVehicle(_, { id }, context, info) {
    const repository = getRepository(TransportVehicle)

    return await repository.findOne(
      { id },
      {
        relations: ['transportVehicleDetails']
      }
    )
  }
}
