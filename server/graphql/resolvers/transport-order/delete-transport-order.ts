import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const deleteTransportOrder = {
  async deleteTransportOrder(_: any, { name }, context: any) {
    return await getRepository(TransportOrder).delete({ domain: context.domain, name })
  }
}
