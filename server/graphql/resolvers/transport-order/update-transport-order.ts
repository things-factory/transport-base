import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const updateTransportOrder = {
  async updateTransportOrder(_: any, { name, patch }, context: any) {
    const repository = getRepository(TransportOrder)
    const transportOrder = await repository.findOne({ where: { domain: context.domain, name } })

    return await repository.save({
      ...transportOrder,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
