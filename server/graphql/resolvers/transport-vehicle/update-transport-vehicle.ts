import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicle = {
  async updateTransportVehicle(_: any, { regNumber, patch }, context: any) {
    const repository = getRepository(TransportVehicle)
    const transportVehicle = await repository.findOne({ where: { domain: context.domain, regNumber } })

    return await repository.save({
      ...transportVehicle,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
