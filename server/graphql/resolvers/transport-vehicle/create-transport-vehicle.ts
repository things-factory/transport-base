import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const createTransportVehicle = {
  async createTransportVehicle(_: any, { transportVehicle }, context: any) {
    return await getRepository(TransportVehicle).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...transportVehicle
    })
  }
}
