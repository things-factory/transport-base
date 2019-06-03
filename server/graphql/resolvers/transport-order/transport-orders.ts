import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'
import { ListParam, buildQuery } from '@things-factory/shell'

export const transportOrdersResolver = {
  async transportOrders(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(TransportOrder).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
