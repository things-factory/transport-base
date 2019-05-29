import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const transportOrderDetailResolver = {
  async transportOrderDetail(_, { id }, context, info) {
    const repository = getRepository(TransportOrderDetail)

    return await repository.findOne(
      { id },
      {
        relations: ['transportOrderDetailDetails']
      }
    )
  }
}
