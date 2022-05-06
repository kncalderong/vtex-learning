import { AppClient, InstanceOptions, IOContext } from '@vtex/api'

export default class Analytics extends AppClient {
  //this class is a client extended by a template from vtex
  constructor(context: IOContext, options?: InstanceOptions) {
    super('vtex.mocked-analytics@0.x', context, options)
  }
  //this is a method that retrieves an array of two variables: string of product's ID and number of people views
  public getLiveUsers(): Promise<LiveUsersProduct[]> {
    return this.http.get('_v/live-products')
  }
}

interface LiveUsersProduct {
  slug: string
  liveUsers: number
}
