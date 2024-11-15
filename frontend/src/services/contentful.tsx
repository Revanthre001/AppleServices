import { createClient, EntryCollection, Entry, EntrySkeletonType } from 'contentful'
import NodeCache from 'node-cache'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
})

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: 'preview.contentful.com'
})

const cache = new NodeCache({ stdTTL: (process.env.CONTENTFUL_CACHE_REVALIDATE_TIME as unknown as number) || 600 })

interface ContentfulOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export async function getEntriesWithCache<T extends EntrySkeletonType>(
  contentType: string,
  draftMode: boolean,
  options: ContentfulOptions = {}
): Promise<EntryCollection<T>> {
  const cacheKey = `${contentType}-${JSON.stringify(options)}`

  const cachedData = cache.get<EntryCollection<T>>(cacheKey)
  if (cachedData && !draftMode) {
    return cachedData
  }

  try {
    const cfClient = draftMode ? previewClient : client
    const entries = await cfClient.getEntries<T>({
      content_type: contentType,
      ...options
    })

    // Store in cache
    if (!draftMode) {
      cache.set(cacheKey, entries)
    }

    return entries
  } catch (error) {
    console.error('Error fetching from Contentful:', error)
    throw error
  }
}

export async function getEntryWithCache<T extends EntrySkeletonType>(
  entryId: string,
  draftMode: boolean,
  options: ContentfulOptions = {}
): Promise<Entry<T>> {
  const cacheKey = `entry-${entryId}-${JSON.stringify(options)}`

  const cachedData = cache.get<Entry<T>>(cacheKey)
  if (cachedData && !draftMode) {
    return cachedData
  }

  try {
    const cfClient = draftMode ? previewClient : client
    const entry = await cfClient.getEntry<T>(entryId, options)

    if (!draftMode) {
      cache.set(cacheKey, entry)
    }

    return entry
  } catch (error) {
    console.error('Error fetching entry from Contentful:', error)
    throw error
  }
}
