import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const transportOrderResolver = {
  async transportOrder(_, { id }, context, info) {
    const repository = getRepository(TransportOrder)

    return await repository.findOne(
      { id },
      {
        relations: ['transportOrderDetails']
      }
    )
  }
}
