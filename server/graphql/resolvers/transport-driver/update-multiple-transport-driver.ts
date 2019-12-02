import { EntityManager, getManager } from 'typeorm'
import { TransportDriver } from '../../../entities'
import { createTransportDriver } from './create-transport-driver'
import { updateTransportDriver } from './update-transport-driver'

export const updateMultipleTransportDriver = {
  async updateMultipleTransportDriver(_: any, { patches }, context: any): Promise<any> {
    return await getManager().transaction(async (trxMgr: EntityManager) => {
      let results = []
      const _createRecords = patches.filter((patch: any) => patch.cuFlag === '+')
      const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')

      if (_createRecords.length > 0) {
        for (let i = 0; i < _createRecords.length; i++) {
          const patch: TransportDriver = _createRecords[i]
          const result = await createTransportDriver(patch, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: '+' })
        }
      }

      if (_updateRecords.length > 0) {
        for (let i = 0; i < _updateRecords.length; i++) {
          const patch: TransportDriver = _updateRecords[i]
          const result = await updateTransportDriver(patch.id, patch, context.state.user)
          results.push({ ...result, cuFlag: 'M' })
        }
      }

      return results
    })
  }
}
