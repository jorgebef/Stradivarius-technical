import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesActions } from '../../store/favoritesSlice'

export default function MeetupItem({ item }) {
  const dispatch = useDispatch()
  const { favsIdArray } = useSelector(state => state.favorites)

  const handleClick = itemId => {
    if (favsIdArray.includes(itemId)) {
      dispatch(favoritesActions.removeFromFavorites(itemId))
    } else {
      dispatch(favoritesActions.addToFavorites(itemId))
    }
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleClick(item.id)}>
            {favsIdArray.includes(item.id)
              ? 'Remove from Favorites'
              : 'Add to favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}
