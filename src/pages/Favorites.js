import { useDispatch, useSelector } from 'react-redux'
import MeetupItem from '../components/meetups/MeetupItem'
import { useFetch } from '../util-hooks/useFetch'
import classes from '../components/meetups/MeetupList.module.css'
import { favoritesActions } from '../store/favoritesSlice'

export default function FavoritesPage() {
  const { favsIdArray } = useSelector(state => state.favorites)

  const { data } = useFetch({
    url: 'https://62813aef1020d8520586e92e.mockapi.io/meetups',
  })

  const dispatch = useDispatch()

  const FavoritesList = ({ fetchData }) => {
    const favoritesData = favsIdArray.map(itemId => {
      const itemData = fetchData.find(item => item.id === itemId)
      if (!itemData) {
        // If for whatever reason the data doesn't come back, then simply remove the
        // item from favorites and alert the user
        dispatch(favoritesActions.removeFromFavorites(itemId))
        alert(
          `Item ID ${itemId} has been removed from favourites due to an unexpected error`
        )
        return false
      }
      return itemData
    })

    return favoritesData.length === 0 ? (
      <p>No Favorites</p>
    ) : (
      <ul className={classes.list}>
        {favoritesData.map(item => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    )
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {data ? (
        <ul>
          <FavoritesList fetchData={data} />
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
