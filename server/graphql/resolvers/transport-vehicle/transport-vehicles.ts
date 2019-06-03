import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehiclesResolver = {
  async transportVehicles(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(TransportVehicle).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
