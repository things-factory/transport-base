import { getRepository } from 'typeorm'
import { TransportOrder } from '../../../entities'

export const transportOrderResolver = {
  async transportOrder(_: any, { name }, context: any) {
    return await getRepository(TransportOrder).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'details', 'creator', 'updater']
    })
  }
}
