import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehicleResolver = {
  async transportVehicle(_: any, { id }, context: any) {
    return await getRepository(TransportVehicle).findOne({
      where: { domain: context.domain, id },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
