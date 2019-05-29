import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const deleteTransportOrder = {
  async deleteTransportOrder(_, { id }) {
    const repository = getRepository(TransportOrder)

    return await repository.delete(id)
  }
}
