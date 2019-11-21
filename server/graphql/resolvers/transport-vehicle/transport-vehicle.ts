import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehicleResolver = {
  async transportVehicle(_: any, { name }, context: any) {
    return await getRepository(TransportVehicle).findOne({
      where: {
        domain: context.state.domain,
        name,
        bizplace: In(await getPermittedBizplaceIds(context.state.domain, context.state.user))
      },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
