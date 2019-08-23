import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'
import { Bizplace } from '@things-factory/biz-base'

export const createTransportDriver = {
  async createTransportDriver(_: any, { transportDriver }, context: any) {
    if (transportDriver.bizplace && transportDriver.bizplace.id) {
      transportDriver.bizplace = await getRepository(Bizplace).findOne(transportDriver.bizplace.id)
    }

    return await getRepository(TransportDriver).save({
      ...transportDriver,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
