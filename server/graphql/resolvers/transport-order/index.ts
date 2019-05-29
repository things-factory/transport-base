import { transportOrderResolver } from './transport-order'
import { transportOrdersResolver } from './transport-orders'

import { updateTransportOrder } from './update-transport-order'
import { createTransportOrder } from './create-transport-order'
import { deleteTransportOrder } from './delete-transport-order'

export const Query = {
  ...transportOrdersResolver,
  ...transportOrderResolver
}

export const Mutation = {
  ...updateTransportOrder,
  ...createTransportOrder,
  ...deleteTransportOrder
}
