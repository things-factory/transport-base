import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const deleteTransportDriversResolver = {
  async deleteTransportDrivers(_: any, { ids }) {
    return await deleteTransportDrivers(ids)
  }
}

export async function deleteTransportDrivers(ids: string[], trxMgr?: EntityManager) {
  const repository: Repository<TransportDriver> = trxMgr
    ? trxMgr.getRepository(TransportDriver)
    : getRepository(TransportDriver)
  return await repository.delete(ids)
}
