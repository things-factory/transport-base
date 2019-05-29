import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const createTransportDriver = {
  async createTransportDriver(_, { transportDriver: attrs }) {
    const repository = getRepository(TransportDriver)
    const newTransportDriver = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newTransportDriver)
  }
}
