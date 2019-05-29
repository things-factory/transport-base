import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriverResolver = {
  async transportDriver(_, { id }, context, info) {
    const repository = getRepository(TransportDriver)

    return await repository.findOne(
      { id },
      {
        relations: ['transportDriverDetails']
      }
    )
  }
}
