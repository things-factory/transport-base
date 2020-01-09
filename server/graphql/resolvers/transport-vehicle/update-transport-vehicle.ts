import { User } from '@things-factory/auth-base'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicleResolver = {
  async updateTransportVehicle(_: any, { name, patch }, context: any) {
    return await updateTransportVehicle(name, patch, context.state.user)
  }
}

export async function updateTransportVehicle(
  name: string,
  patch: TransportVehicle,
  user: User,
  trxMgr?: EntityManager
) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  const transportVehicle = await repository.findOne(name)

  return await repository.save({
    ...transportVehicle,
    ...patch,
    updater: user
  })
}
