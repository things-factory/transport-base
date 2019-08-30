import { getUserBizplaces } from '@things-factory/biz-base'
import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const transportVehiclesResolver = {
  async transportVehicles(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const userBizplaces = await getUserBizplaces(context)
    convertedParams.where.bizplace = In(userBizplaces.map(userBizplace => userBizplace.id))
    const [items, total] = await getRepository(TransportVehicle).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
    return { items, total }
  }
}
