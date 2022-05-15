import MeetupItem from '../components/meetups/MeetupItem'
import { useFetch } from '../util-hooks/useFetch'
import classes from './../components/meetups/MeetupList.module.css'

export default function AllMeetupsPage() {

  // One single call to the data endpoint instead of calling for each card
  const { data } = useFetch({
    url: '/data.json',
  })

  return (
    <section>
      <h1>All Meetups</h1>
      {data ? (
        <ul className={classes.list}>
          {data.map(item => (
            <MeetupItem item={item} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
