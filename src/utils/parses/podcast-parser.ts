import { IPodcast } from '../../interfaces/podcast.ts'

interface IPod {
  id?: string
  title?: string
  members?: string
  published_at?: string
  thumbnail?: string
  description?: string
}

export const podcastParser = ({
  id,
  title,
  members,
  published_at,
  thumbnail,
  description
}: IPod): IPodcast => ({
  ...id && { id },
  ...title && { headline: title },
  ...members && { members },
  ...published_at && { publishedAt: published_at },
  ...thumbnail && { thumbnail },
  ...description && { description }
})
