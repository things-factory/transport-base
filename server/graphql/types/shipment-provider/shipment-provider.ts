import gql from 'graphql-tag'

export const ShipmentProvider = gql`
  type ShipmentProvider {
    id: String
    name: String
    domain: Domain
    description: String
    isDefault: Boolean
    apiIntegration: Boolean
    trackingCodeExample: String
    trackingCodeValidationRegex: String
    cod: Boolean
    trackingUrl: String
    deliveryOption: String
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
