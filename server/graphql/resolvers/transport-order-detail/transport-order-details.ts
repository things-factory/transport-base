import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'
import { ListParam, buildQuery } from '@things-factory/shell'

export const transportOrderDetailsResolver = {
  async transportOrderDetails(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(TransportOrderDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
