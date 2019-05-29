import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriversResolver = {
  async transportDrivers() {
    const repository = getRepository(TransportDriver)

    return await repository.find()
  }
}
