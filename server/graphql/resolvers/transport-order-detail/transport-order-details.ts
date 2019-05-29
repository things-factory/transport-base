import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const transportOrderDetailsResolver = {
  async transportOrderDetails() {
    const repository = getRepository(TransportOrderDetail)

    return await repository.find()
  }
}
