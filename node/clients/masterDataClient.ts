/* eslint-disable prettier/prettier */

import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class MasterDataClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      `http://${context.account}.vtexcommercestable.com.br/api/dataentities`,
      context,
      {
        ...options,
        headers: {
          VtexIdClientAutCookie:
            context.adminUserAuthToken ??
            context.storeUserAuthToken ??
            context.authToken,
        },
      }
    )
  }

  // https://poctokin.vtexcommercestable.com.br/api/dataentities/CL/search?_schema=mdv1&_fields=productClusterIds&_where=email=melisa.alvarezteran@vtex.com.br

  public async getIdOfCollection(email: string) {
    return this.http.get(
      `/CL/search?_schema=mdv1&_fields=productClusterIds&_where=email=${email}`
    )
  }
}