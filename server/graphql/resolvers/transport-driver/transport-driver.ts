import { getUserBizplaces } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriverResolver = {
  async transportDriver(_: any, { driverCode }, context: any) {
    return await getRepository(TransportDriver).findOne({
      where: { domain: context.domain, driverCode, bizplace: In(await getUserBizplaces(context)) },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
