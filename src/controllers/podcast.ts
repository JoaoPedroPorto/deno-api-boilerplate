import { getPodcasts, getPodcastById } from '../data-sources/podcast-api.ts'
import { IBody } from '../interfaces/body.ts'
import { IContext } from '../interfaces/context.ts'
import { IPodcast } from '../interfaces/podcast.ts'

const DEFAULT_PAGE: number = 1
const DEFAULT_PER_PAGE: number = 10

export const getAllPodcasts = async ({
  request,
  response
}: IContext): Promise<IBody> => {
  const page: number = Number(request.url.searchParams.get('page')) || DEFAULT_PAGE
  const perPage: number = Number(request.url.searchParams.get('perPage')) || DEFAULT_PER_PAGE

  return getPodcasts(page, perPage)
    .then((data: Array<IPodcast>) => response.body = {
    message: 'Podcast list returned successfully',
    data
  })
}

export const getPodcastBySlug = async ({
  params: { slug },
  response
}: IContext): Promise<IBody> =>
  getPodcastById(slug)
  .then((data: IPodcast) => response.body = {
    message: 'Podcast returned successfully',
    data
  })
