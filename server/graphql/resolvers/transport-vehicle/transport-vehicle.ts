import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehicleResolver = {
  async transportVehicle(_: any, { regNumber }, context: any) {
    return await getRepository(TransportVehicle).findOne({
      where: { domain: context.domain, regNumber },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
