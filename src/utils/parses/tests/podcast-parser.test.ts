import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

import { podcastParser } from '../podcast-parser.ts'

const podcastMocked = {
  id: 'podcast-id',
  title: 'Overview of Deno',
  members: 'João Porto e Ricardo Netto',
  published_at: '2021-06-09 12:00:00',
  description: 'Nessa data, João Porto e Ricardo Netto se reúne com a Guilda de Node.js para realizarem uma Mesa Redonda...'
}

const podcastParsed = {
  id: 'podcast-id',
  headline: 'Overview of Deno',
  members: 'João Porto e Ricardo Netto',
  publishedAt: '2021-06-09 12:00:00',
  description: 'Nessa data, João Porto e Ricardo Netto se reúne com a Guilda de Node.js para realizarem uma Mesa Redonda...'
}

Deno.test('it should return a podcast parsed', () => {
  assertEquals(podcastParser(podcastMocked), podcastParsed)
})

Deno.test('it should return an empty podcast', () => {
  assertEquals(podcastParser({}), {})
})
