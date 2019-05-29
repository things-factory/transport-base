import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDriver = {
  async deleteTransportDriver(_, { id }) {
    const repository = getRepository(TransportDriver)

    return await repository.delete(id)
  }
}
