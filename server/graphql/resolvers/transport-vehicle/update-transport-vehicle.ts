import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicle = {
  async updateTransportVehicle(_, { id, patch }) {
    const repository = getRepository(TransportVehicle)

    const transportVehicle = await repository.findOne({ id })

    return await repository.save({
      ...transportVehicle,
      ...patch
    })
  }
}
