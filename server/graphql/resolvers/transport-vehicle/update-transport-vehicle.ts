import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicleResolver = {
  async updateTransportVehicle(_: any, { patch }, context: any) {
    return await updateTransportVehicle(patch, context.state.domain, context.state.user)
  }
}

export async function updateTransportVehicle(
  patch: TransportVehicle,
  domain: Domain,
  user: User,
  trxMgr?: EntityManager
) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  const transportVehicle = await repository.findOne({
    where: { domain, id: patch.id }
  })

  return await repository.save({
    ...transportVehicle,
    ...patch,
    regNumber: patch.name,
    updater: user
  })
}
