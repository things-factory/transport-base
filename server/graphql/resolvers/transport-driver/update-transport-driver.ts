import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const updateTransportDriver = {
  async updateTransportDriver(_, { id, patch }) {
    const repository = getRepository(TransportDriver)

    const transportDriver = await repository.findOne({ id })

    return await repository.save({
      ...transportDriver,
      ...patch
    })
  }
}
