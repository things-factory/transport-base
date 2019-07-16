import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicle = {
  async updateTransportVehicle(_: any, { id, patch }, context: any) {
    const repository = getRepository(TransportVehicle)
    const transportVehicle = await repository.findOne({ where: { domain: context.domain, id } })

    return await repository.save({
      ...transportVehicle,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
