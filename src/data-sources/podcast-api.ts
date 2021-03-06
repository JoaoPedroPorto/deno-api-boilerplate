import { envs } from '../settings.ts'

import { IPodcast } from '../interfaces/podcast.ts'
import { podcastParser } from '../utils/parses/podcast-parser.ts'

const {
  PODCAST_API_HOST,
  PODCAST_API_PORT
} = envs

export const getPodcasts = async (page: number, perPage: number): Promise<Array<IPodcast>> =>
  fetch(`${PODCAST_API_HOST}:${PODCAST_API_PORT}/episodes/?_page=${page}&_limit=${perPage}&_sort=published_at&order=desc`)
    .then(data => data.json())
    .then((podcasts = []) => podcasts.map(podcastParser))

export const getPodcastById = async (podcastId: string): Promise<IPodcast> =>
  fetch(`${PODCAST_API_HOST}:${PODCAST_API_PORT}/episodes/${podcastId}`)
    .then(data => data.json())
    .then(podcastParser)
