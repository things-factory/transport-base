import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriversResolver = {
  async transportDrivers(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(TransportDriver).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('TransportDriver.domain', 'Domain')
      .leftJoinAndSelect('TransportDriver.creator', 'Creator')
      .leftJoinAndSelect('TransportDriver.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
