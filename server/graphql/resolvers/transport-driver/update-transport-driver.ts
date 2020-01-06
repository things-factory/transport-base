import { User } from '@things-factory/auth-base'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const updateTransportDriverResolver = {
  async updateTransportDriver(_: any, { id, patch }, context: any) {
    return await updateTransportDriver(id, patch, context.state.user)
  }
}

export async function updateTransportDriver(id: string, patch: TransportDriver, user: User, trxMgr?: EntityManager) {
  const repository: Repository<TransportDriver> = trxMgr
    ? trxMgr.getRepository(TransportDriver)
    : getRepository(TransportDriver)
  const transportDriver = await repository.findOne(id)

  return await repository.save({
    ...transportDriver,
    ...patch,
    updater: user
  })
}
