import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const createTransportDriver = {
  async createTransportDriver(_: any, { transportDriver }, context: any) {
    return await getRepository(TransportDriver).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...transportDriver
    })
  }
}
