import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice } from './favoritesSlice'

const store = configureStore({
  reducer: { favorites: favoritesSlice.reducer },
})

export default store
