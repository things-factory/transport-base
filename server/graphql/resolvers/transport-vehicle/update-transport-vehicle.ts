import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateTransportVehicleResolver = {
  async updateTransportVehicle(_: any, { name, patch }, context: any) {
    return await updateTransportVehicle(name, patch, context.state.domain, context.state.user)
  }
}

export async function updateTransportVehicle(
  name: string,
  patch: TransportVehicle,
  user: User,
  domain: Domain,
  trxMgr?: EntityManager
) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  const transportVehicle = await repository.findOne({
    where: { domain, name }
  })

  return await repository.save({
    ...transportVehicle,
    ...patch,
    updater: user
  })
}
