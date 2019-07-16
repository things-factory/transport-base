import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehicle = {
  async deleteTransportVehicle(_: any, { id }, context: any) {
    return await getRepository(TransportVehicle).delete({ domain: context.domain, id })
  }
}
