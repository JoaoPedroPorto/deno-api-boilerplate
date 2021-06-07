import { IPodcast } from '../interfaces/podcast.ts'
export interface IBody {
  message: string
  data: Array<IPodcast> | IPodcast
}
