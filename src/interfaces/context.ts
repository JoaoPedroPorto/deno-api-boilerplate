import { Response } from 'https://deno.land/x/oak/response.ts'
import { Request } from 'https://deno.land/x/oak/request.ts'

export interface IContext {
  request?: Request
  response: Response
  params: {
    slug?: string
  }
}
