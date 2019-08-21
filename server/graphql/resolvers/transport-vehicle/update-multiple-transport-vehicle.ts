import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateMultipleTransportVehicle = {
  async updateMultipleTransportVehicle(_: any, { patches }, context: any) {
    const results = []
    const _createRecords = patches
      .filter((patch: any) => patch.cuFlag === '+')
      .map((patch: any) => {
        delete patch.cuFlag
        return patch
      })
    const _updateRecords = patches
      .filter((patch: any) => patch.cuFlag === 'M')
      .map((patch: any) => {
        delete patch.cuFlag
        return patch
      })

    const repository = getRepository(TransportVehicle)

    if (_createRecords.length > 0) {
      const result = await repository.save(
        _createRecords.map((patch: any) => {
          return {
            domain: context.domain,
            creator: context.state.user,
            updater: context.state.user,
            ...patch
          }
        })
      )

      results.push(result)
    }

    if (_updateRecords.length > 0) {
      const result = await repository.save(
        _updateRecords.map(async (patch: any) => {
          const transportVehicle = await repository.findOne(patch.id)

          return {
            ...transportVehicle,
            ...patch,
            updater: context.state.user
          }
        })
      )

      results.push(result)
    }

    return results
  }
}
