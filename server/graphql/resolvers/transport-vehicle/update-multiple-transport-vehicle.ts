import { getRepository } from 'typeorm'
import { TransportVehicle } from '../../../entities'

export const updateMultipleContactPoint = {
  async updateMultipleContactPoint(_: any, { patches }, context: any) {
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
            creatorId: context.state.user.id,
            updaterId: context.state.user.id,
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
            updaterId: context.state.user.id
          }
        })
      )

      results.push(result)
    }

    return results
  }
}
