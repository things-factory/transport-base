import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriversResolver = {
  async transportDrivers(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params, context.state.domain.id)
    const [items, total] = await getRepository(TransportDriver).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  }
}
