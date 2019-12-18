import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriverResolver = {
  async transportDriver(_: any, { driverCode }, context: any) {
    return await getRepository(TransportDriver).findOne({
      where: {
        domain: context.state.domain,
        driverCode
      },
      relations: ['bizplace', 'domain', 'creator', 'updater']
    })
  }
}
