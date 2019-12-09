import { EntityManager, getRepository, Repository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const deleteTransportVehicleResolver = {
  async deleteTransportVehicle(_: any, { id }, _context: any) {
    await deleteTransportVehicle(id)
  }
}

export async function deleteTransportVehicle(id: string, trxMgr?: EntityManager) {
  const repository: Repository<TransportVehicle> = trxMgr
    ? trxMgr.getRepository(TransportVehicle)
    : getRepository(TransportVehicle)
  await repository.delete(id)
  return true
}
