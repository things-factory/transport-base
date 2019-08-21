import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const createTransportDriver = {
  async createTransportDriver(_: any, { transportDriver }, context: any) {
    return await getRepository(TransportDriver).save({
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...transportDriver
    })
  }
}
