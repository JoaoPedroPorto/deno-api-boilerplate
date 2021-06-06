import { envs } from '../settings.ts'

import { podcastParser } from '../utils/parses/podcast-parser.ts'

const {
  PODCAST_API_HOST,
  PODCAST_API_PORT
} = envs

export const getPodcasts = async (page: number, perPage: number) =>
  fetch(`${PODCAST_API_HOST}:${PODCAST_API_PORT}/episodes/?_page=${page}&_limit=${perPage}&_sort=published_at&order=desc`)
    .then(data => data.json())
    .then((podcasts = []) => podcasts.map(podcastParser))

export const getPodcastById = async (podcastId: string) =>
  fetch(`${PODCAST_API_HOST}:${PODCAST_API_PORT}/episodes/${podcastId}`)
    .then(data => data.json())
    .then(podcastParser)
