import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const updateTransportDriver = {
  async updateTransportDriver(_: any, { name, patch }, context: any) {
    const repository = getRepository(TransportDriver)
    const transportDriver = await repository.findOne({ where: { domain: context.domain, name } })

    return await repository.save({
      ...transportDriver,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
