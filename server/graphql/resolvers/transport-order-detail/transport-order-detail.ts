import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const transportOrderDetailResolver = {
  async transportOrderDetail(_: any, { name }, context: any) {
    return await getRepository(TransportOrderDetail).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'productBatch', 'transportOrder', 'creator', 'updater']
    })
  }
}
