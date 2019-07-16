import { getRepository } from 'typeorm'
import { TransportDriver } from '../../../entities'

export const transportDriverResolver = {
  async transportDriver(_: any, { name }, context: any) {
    return await getRepository(TransportDriver).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
