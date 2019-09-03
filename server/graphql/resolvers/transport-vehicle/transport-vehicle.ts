import { Bizplace } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehicleResolver = {
  async transportVehicle(_: any, { name }, context: any) {
    return await getRepository(TransportVehicle).findOne({
      where: {
        domain: context.state.domain,
        name,
        bizplace: In(context.state.bizplaces.map((bizplace: Bizplace) => bizplace.id))
      },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
