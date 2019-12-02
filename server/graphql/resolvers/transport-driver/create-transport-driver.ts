import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const createTransportDriverResolver = {
  async createTransportDriver(_: any, { transportDriver }, context: any) {
    return await createTransportDriver(transportDriver, context.state.domain, context.state.user)
  }
}

export async function createTransportDriver(
  transportDriver: TransportDriver,
  domain: Domain,
  user: User,
  trxMgr?: EntityManager
) {
  const repository: Repository<TransportDriver> = trxMgr
    ? trxMgr.getRepository(TransportDriver)
    : getRepository(TransportDriver)
  return await repository.save({
    ...transportDriver,
    domain,
    creator: user,
    updater: user
  })
}
