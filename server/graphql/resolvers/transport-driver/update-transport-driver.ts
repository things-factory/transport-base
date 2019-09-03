import { Bizplace } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const updateTransportDriver = {
  async updateTransportDriver(_: any, { name, patch }, context: any) {
    const transportDriver = await getRepository(TransportDriver).findOne({
      where: { domain: context.state.domain, name }
    })

    if (patch.bizplace && patch.bizplace.id) {
      patch.bizplace = await getRepository(Bizplace).findOne(patch.bizplace.id)
    }

    return await getRepository(TransportDriver).save({
      ...transportDriver,
      ...patch,
      updater: context.state.user
    })
  }
}
