import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const updateTransportDriver = {
  async updateTransportDriver(_: any, { driverCode, patch }, context: any) {
    const repository = getRepository(TransportDriver)
    const transportDriver = await repository.findOne({ where: { domain: context.domain, driverCode } })

    return await repository.save({
      ...transportDriver,
      ...patch,
      updater: context.state.user
    })
  }
}
