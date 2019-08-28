import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehicleResolver = {
  async transportVehicle(_: any, { name }, context: any) {
    return await getRepository(TransportVehicle).findOne({
      where: { domain: context.domain, name, bizplace: context.bizplace },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
