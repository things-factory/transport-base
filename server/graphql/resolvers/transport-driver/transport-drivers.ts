import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriversResolver = {
  async transportDrivers(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(TransportDriver).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
