import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const updateTransportOrderDetail = {
  async updateTransportOrderDetail(_, { id, patch }) {
    const repository = getRepository(TransportOrderDetail)

    const transportOrderDetail = await repository.findOne({ id })

    return await repository.save({
      ...transportOrderDetail,
      ...patch
    })
  }
}
