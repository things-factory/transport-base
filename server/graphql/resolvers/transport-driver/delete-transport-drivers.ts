import { getRepository, In } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDrivers = {
  async deleteTransportDrivers(_: any, { names }, context: any) {
    await getRepository(TransportDriver).delete({
      domain: context.domain,
      name: In(names)
    })

    return true
  }
}
