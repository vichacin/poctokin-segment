import { ClientsConfig, IOClients } from '@vtex/api'
import MasterDataClient from './masterDataClient'

const MEDIUM_TIMEOUT_MS = 2 * 1000

export class Clients extends IOClients {
  // Add client example
  // public get myClient(): ClientType {
  //   return this.getOrSet('myClient', ClientType)
  // }
  public get masterDataClient() {
    return this.getOrSet('masterDataClient', MasterDataClient)
  }
}

export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: MEDIUM_TIMEOUT_MS,
    },
  },
}
