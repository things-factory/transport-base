import { Bizplace, getMyBizplace } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const createTransportDriver = {
  async createTransportDriver(_: any, { transportDriver }, context: any) {
    if (transportDriver.bizplace && transportDriver.bizplace.id) {
      transportDriver.bizplace = await getRepository(Bizplace).findOne(transportDriver.bizplace.id)
    } else {
      transportDriver.bizplace = await getMyBizplace(context.state.user)
    }

    return await getRepository(TransportDriver).save({
      ...transportDriver,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
