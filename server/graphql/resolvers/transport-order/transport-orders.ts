import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const transportOrdersResolver = {
  async transportOrders(_: any, params: ListParam) {
    const queryBuilder = getRepository(TransportOrder).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('TransportOrder.domain', 'Domain')
      .leftJoinAndSelect('TransportOrder.details', 'Details')
      .leftJoinAndSelect('TransportOrder.creator', 'Creator')
      .leftJoinAndSelect('TransportOrder.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
