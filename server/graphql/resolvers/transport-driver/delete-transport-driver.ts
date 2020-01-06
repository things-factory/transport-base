import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDriverResolver = {
  async deleteTransportDriver(_: any, { id }, _context: any) {
    await deleteTransportDriver(id)
  }
}

export async function deleteTransportDriver(id: string, trxMgr?: EntityManager) {
  const repository: Repository<TransportDriver> = trxMgr
    ? trxMgr.getRepository(TransportDriver)
    : getRepository(TransportDriver)
  await repository.delete(id)
  return true
}
