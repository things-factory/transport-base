import { Bizplace } from '@things-factory/biz-base'
import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriversResolver = {
  async transportDrivers(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.bizplace = In(context.state.bizplaces.map((bizplace: Bizplace) => bizplace.id))
    const [items, total] = await getRepository(TransportDriver).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })

    return { items, total }
  }
}
