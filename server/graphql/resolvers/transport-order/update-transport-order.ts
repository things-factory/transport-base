import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const updateTransportOrder = {
  async updateTransportOrder(_, { id, patch }) {
    const repository = getRepository(TransportOrder)

    const transportOrder = await repository.findOne({ id })

    return await repository.save({
      ...transportOrder,
      ...patch
    })
  }
}
