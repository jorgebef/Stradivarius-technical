import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

export default function MeetupList({ data }) {
  return (
    <>
      {data.length > 0 ? (
        <ul className={classes.list}>
          {data.map(item => (
            <MeetupItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>No Meetups</p>
      )}
    </>
  )
}
