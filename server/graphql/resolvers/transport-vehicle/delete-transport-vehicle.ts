import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehicle = {
  async deleteTransportVehicle(_, { id }) {
    const repository = getRepository(TransportVehicle)

    return await repository.delete(id)
  }
}
