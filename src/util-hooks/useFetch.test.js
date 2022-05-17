import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { useFetch } from '../util-hooks/useFetch'
import { renderHook } from '@testing-library/react-hooks'

import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('testing useFetchHook', () => {
  const mockData = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm3',
      title: 'This is a third meetup',
      image:
        'https://www.deutschakademie.de/muenchen/blog/wp-content/uploads/2021/03/Mu%CC%88nchen-Alemania.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ]

  const url = 'https://62813aef1020d8520586e92e.mockapi.io/meetups'

  const server = setupServer(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.json(mockData))
    })
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('useFetch works and returns expected Data', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetch({ url: url }),
      { wrapper }
    )
    await waitForNextUpdate()
    expect(result.current.data).toEqual(mockData)
  })
})
