import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriverResolver = {
  async transportDriver(_: any, { driverCode }, context: any) {
    return await getRepository(TransportDriver).findOne({
      where: {
        domain: context.state.domain,
        driverCode,
        bizplace: In(await getPermittedBizplaceIds(context.state.domain, context.state.user))
      },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
