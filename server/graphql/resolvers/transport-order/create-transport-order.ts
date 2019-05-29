import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const createTransportOrder = {
  async createTransportOrder(_, { transportOrder: attrs }) {
    const repository = getRepository(TransportOrder)
    const newTransportOrder = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newTransportOrder)
  }
}
