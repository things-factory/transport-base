import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehiclesResolver = {
  async deleteTransportVehicles(_: any, { ids }) {
    await deleteTransportVehicles(ids)
  }
}

export async function deleteTransportVehicles(ids: string[], trxMgr?: EntityManager) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  await repository.delete(ids)
  return true
}
