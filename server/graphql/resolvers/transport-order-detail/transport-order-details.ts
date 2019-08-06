import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const transportOrderDetailsResolver = {
  async transportOrderDetails(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(TransportOrderDetail).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('TransportOrderDetail.domain', 'Domain')
      .leftJoinAndSelect('TransportOrderDetail.productBatch', 'ProductBatch')
      .leftJoinAndSelect('TransportOrderDetail.transportOrder', 'TransportOrder')
      .leftJoinAndSelect('TransportOrderDetail.creator', 'Creator')
      .leftJoinAndSelect('TransportOrderDetail.updater', 'Updater')
      .getManyAndCount()
    return { items, total }
  }
}
