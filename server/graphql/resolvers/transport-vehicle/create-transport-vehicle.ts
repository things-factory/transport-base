import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const createTransportVehicleResolver = {
  async createTransportVehicle(_: any, { transportVehicle }, context: any) {
    return await createTransportVehicle(transportVehicle, context.state.domain, context.state.user)
  }
}

export async function createTransportVehicle(
  transportVehicle: TransportVehicle,
  domain: Domain,
  user: User,
  trxMgr?: EntityManager
) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  return await repository.save({
    ...transportVehicle,
    regNumber: transportVehicle.name,
    domain,
    creator: user,
    updater: user
  })
}
