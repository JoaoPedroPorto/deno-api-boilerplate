import { Router } from 'https://deno.land/x/oak/mod.ts'

import { getAllPodcasts, getPodcastBySlug } from '../controllers/podcast.ts'
import { IContext } from '../interfaces/context.ts'

const router = new Router()

router.get('/api/v1/healthcheck', ({ response }: IContext) => {
  response.body = 'WORKING!!!'
})

router
  .get('/api/v1/podcasts/', getAllPodcasts)
  .get('/api/v1/podcasts/:slug', getPodcastBySlug);

export default router
