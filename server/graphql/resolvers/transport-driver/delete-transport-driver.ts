import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDriver = {
  async deleteTransportDriver(_: any, { name }, context: any) {
    return await getRepository(TransportDriver).delete({ domain: context.state.domain, name })
  }
}
