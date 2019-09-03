import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehicle = {
  async deleteTransportVehicle(_: any, { name }, context: any) {
    return await getRepository(TransportVehicle).delete({ domain: context.state.domain, name })
  }
}
