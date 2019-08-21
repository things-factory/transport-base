import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const createTransportVehicle = {
  async createTransportVehicle(_: any, { transportVehicle }, context: any) {
    return await getRepository(TransportVehicle).save({
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...transportVehicle
    })
  }
}
