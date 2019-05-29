import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const createTransportOrderDetail = {
  async createTransportOrderDetail(_, { transportOrderDetail: attrs }) {
    const repository = getRepository(TransportOrderDetail)
    const newTransportOrderDetail = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newTransportOrderDetail)
  }
}
