import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehiclesResolver = {
  async transportVehicles(_: any, params: ListParam) {
    const queryBuilder = getRepository(TransportVehicle).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('TransportVehicle.domain', 'Domain')
      .leftJoinAndSelect('TransportVehicle.creator', 'Creator')
      .leftJoinAndSelect('TransportVehicle.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
