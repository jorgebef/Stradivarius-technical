import { useQuery } from 'react-query'

export const useFetch = options => {
  // Use React Query to cache the data for 4 minutes
  return useQuery('data', () => fetch(options.url).then(res => res.json()), {
    cacheTime: 4 * 1000 * 60,
  })
}
