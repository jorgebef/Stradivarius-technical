import MeetupItem from '../components/meetups/MeetupItem'
import { useFetch } from '../util-hooks/useFetch'
import classes from './../components/meetups/MeetupList.module.css'

export default function AllMeetupsPage() {
  // One single call to the data endpoint instead of calling for each card
  const { data } = useFetch({
    url: 'https://62813aef1020d8520586e92e.mockapi.io/meetups',
  })

  if (!data) return <p>Loading...</p>

  return (
    <section>
      <h1>All Meetups</h1>
      {data.length > 0 ? (
        <ul className={classes.list}>
          {data.map(item => (
            <MeetupItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>No Meetups</p>
      )}
    </section>
  )
}
