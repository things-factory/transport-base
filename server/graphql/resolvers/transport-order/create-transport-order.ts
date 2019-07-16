import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const createTransportOrder = {
  async createTransportOrder(_: any, { transportOrder }, context: any) {
    return await getRepository(TransportOrder).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...transportOrder
    })
  }
}
