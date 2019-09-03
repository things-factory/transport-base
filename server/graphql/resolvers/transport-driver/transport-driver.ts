import { Bizplace } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriverResolver = {
  async transportDriver(_: any, { driverCode }, context: any) {
    return await getRepository(TransportDriver).findOne({
      where: {
        domain: context.state.domain,
        driverCode,
        bizplace: In(context.state.bizplaces.map((bizplace: Bizplace) => bizplace.id))
      },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
