import { getRepository } from 'typeorm'
import { TransportOrderDetail } from '../../../entities'

export const createTransportOrderDetail = {
  async createTransportOrderDetail(_: any, { transportOrderDetail }, context: any) {
    return await getRepository(TransportOrderDetail).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...transportOrderDetail
    })
  }
}
