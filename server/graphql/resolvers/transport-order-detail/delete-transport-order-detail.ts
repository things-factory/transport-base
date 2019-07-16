import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const deleteTransportOrderDetail = {
  async deleteTransportOrderDetail(_: any, { name }, context: any) {
    return await getRepository(TransportOrderDetail).delete({ domain: context.domain, name })
  }
}
