import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicle = {
  async updateTransportVehicle(_: any, { name, patch }, context: any) {
    const repository = getRepository(TransportVehicle)
    const transportVehicle = await repository.findOne({ where: { domain: context.domain, name } })

    return await repository.save({
      ...transportVehicle,
      ...patch,
      updater: context.state.user
    })
  }
}
