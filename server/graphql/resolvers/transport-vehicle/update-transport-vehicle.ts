import { Bizplace } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicle = {
  async updateTransportVehicle(_: any, { name, patch }, context: any) {
    const transportVehicle = await getRepository(TransportVehicle).findOne({
      where: { domain: context.domain, name }
    })

    if (patch.bizplace && patch.bizplace.id) {
      patch.bizplace = await getRepository(Bizplace).findOne(patch.bizplace.id)
    }

    return await getRepository(TransportVehicle).save({
      ...transportVehicle,
      ...patch,
      updater: context.state.user
    })
  }
}
