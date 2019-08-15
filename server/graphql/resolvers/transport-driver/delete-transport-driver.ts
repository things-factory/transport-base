import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDriver = {
  async deleteTransportDriver(_: any, { driverCode }, context: any) {
    return await getRepository(TransportDriver).delete({ domain: context.domain, driverCode })
  }
}
