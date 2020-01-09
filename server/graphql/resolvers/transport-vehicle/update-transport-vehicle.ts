import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicleResolver = {
  async updateTransportVehicle(_: any, { id, patch }, context: any) {
    return await updateTransportVehicle(id, patch, context.state.domain, context.state.user)
  }
}

export async function updateTransportVehicle(
  id: string,
  patch: TransportVehicle,
  domain: Domain,
  user: User,
  trxMgr?: EntityManager
) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  const transportDriver = await repository.findOne({
    where: { domain, id }
  })

  return await repository.save({
    ...transportDriver,
    ...patch,
    updater: user
  })
}
