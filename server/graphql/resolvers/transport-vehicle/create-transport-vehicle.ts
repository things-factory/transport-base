import { Bizplace, getUserBizplaces } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const createTransportVehicle = {
  async createTransportVehicle(_: any, { transportVehicle }, context: any) {
    if (transportVehicle.bizplace && transportVehicle.bizplace.id) {
      transportVehicle.bizplace = await getRepository(Bizplace).findOne(transportVehicle.bizplace.id)
    } else {
      const userBizplaces = await getUserBizplaces(context)
      transportVehicle.bizplace = userBizplaces[0]
    }

    return await getRepository(TransportVehicle).save({
      ...transportVehicle,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
