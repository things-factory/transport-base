import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehicleResolver = {
  async deleteTransportVehicle(_: any, { id }, _context: any) {
    return await deleteTransportVehicle(id)
  }
}

export async function deleteTransportVehicle(id: string, trxMgr?: EntityManager) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  return await repository.delete(id)
}
