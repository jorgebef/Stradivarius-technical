import { useDispatch, useSelector } from 'react-redux'
import { useFetch } from '../util-hooks/useFetch'
import { favoritesActions } from '../store/favoritesSlice'
import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

export default function FavoritesPage() {
  const { favsIdArray } = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  const [favData, setFavData] = useState([])

  const { data, isLoading, error } = useFetch({
    url: 'https://62813aef1020d8520586e92e.mockapi.io/meetups',
  })

  useEffect(() => {
    if (isLoading) return
    const favoritesData = favsIdArray.map(itemId => {
      const itemData = data.find(item => item.id === itemId)
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
    setFavData([...favoritesData])
  }, [data, isLoading, error, favsIdArray, dispatch])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error has ocurred: {error.message}</p>

  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList data={favData} />
    </section>
  )
}
