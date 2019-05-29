import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const deleteTransportOrderDetail = {
  async deleteTransportOrderDetail(_, { id }) {
    const repository = getRepository(TransportOrderDetail)

    return await repository.delete(id)
  }
}
