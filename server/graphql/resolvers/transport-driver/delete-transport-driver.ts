import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDriverResolver = {
  async deleteTransportDriver(_: any, { id }, _context: any) {
    return await deleteTransportDriver(id)
  }
}

export async function deleteTransportDriver(id: string, trxMgr?: EntityManager) {
  const repository: Repository<TransportDriver> = trxMgr
    ? trxMgr.getRepository(TransportDriver)
    : getRepository(TransportDriver)
  return await repository.delete(id)
}
