import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehiclesResolver = {
  async deleteTransportVehicles(_: any, { ids }) {
    return await deleteTransportVehicles(ids)
  }
}

export async function deleteTransportVehicles(ids: string[], trxMgr?: EntityManager) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  return await repository.delete(ids)
}
