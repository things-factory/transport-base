import { Bizplace } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateMultipleTransportVehicle = {
  async updateMultipleTransportVehicle(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const transportVehicleRepo = getRepository(TransportVehicle)
    const bizplaceRepo = getRepository(Bizplace)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        if (newRecord.bizplace && newRecord.bizplace.id) {
          newRecord.bizplace = await bizplaceRepo.findOne(newRecord.bizplace.id)
        } else {
          newRecord.bizplace = context.stats.bizplaces[0]
        }

        const result = await transportVehicleRepo.save({
          domain: context.state.domain,
          bizplace: context.bizplace,
          creator: context.state.user,
          updater: context.state.user,
          ...newRecord
        })

        results.push({ ...result, cuFlag: '+' })
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const newRecord = _updateRecords[i]
        const transportVehicle = await transportVehicleRepo.findOne(newRecord.id)

        if (newRecord.bizplace && newRecord.bizplace.id) {
          newRecord.bizplace = await bizplaceRepo.findOne(newRecord.bizplace.id)
        }

        const result = await transportVehicleRepo.save({
          ...transportVehicle,
          ...newRecord,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
