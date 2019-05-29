import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const transportOrdersResolver = {
  async transportOrders() {
    const repository = getRepository(TransportOrder)

    return await repository.find()
  }
}
