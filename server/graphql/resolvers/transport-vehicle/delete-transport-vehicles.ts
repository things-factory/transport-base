import { getRepository, In } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehicles = {
  async deleteTransportVehicles(_: any, { names }, context: any) {
    await getRepository(TransportVehicle).delete({
      domain: context.state.domain,
      name: In(names)
    })

    return true
  }
}
