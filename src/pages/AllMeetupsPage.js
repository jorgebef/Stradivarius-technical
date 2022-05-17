import MeetupList from '../components/meetups/MeetupList'
import { useFetch } from '../util-hooks/useFetch'

export default function AllMeetupsPage() {
  // One single call to the data endpoint instead of calling for each card
  const { data, isLoading, error } = useFetch({
    url: 'https://62813aef1020d8520586e92e.mockapi.io/meetups',
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error has ocurred: {error.message}</p>

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={data} />
    </section>
  )
}
