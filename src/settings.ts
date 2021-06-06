import { config } from 'https://deno.land/x/dotenv/mod.ts'

export const envs = ({
  HOSTNAME: config().HOSTNAME ?? 'http://localhost',
  PORT: Number(config().PORT ?? 8080),
  PODCAST_API_HOST: config().PODCAST_API_HOST ?? "http://localhost",
  PODCAST_API_PORT: Number(config().PODCAST_API_PORT ?? 3333)
})
