import { User } from '@things-factory/auth-base'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicleResolver = {
  async updateTransportVehicle(_: any, { id, patch }, context: any) {
    return await updateTransportVehicle(id, patch, context.state.user)
  }
}

export async function updateTransportVehicle(id: string, patch: TransportVehicle, user: User, trxMgr?: EntityManager) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  const transportVehicle = await repository.findOne(id)

  return await repository.save({
    ...transportVehicle,
    ...patch,
    updater: user
  })
}
