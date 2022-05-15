import { createSlice } from '@reduxjs/toolkit'

const getSavedState = () => {
  const serializedState = localStorage.getItem('favorites')
  return serializedState ? JSON.parse(serializedState) : []
}

const initialState = {
  favsIdArray: getSavedState(),
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const id = action.payload
      state.favsIdArray.push(id)
    },
    removeFromFavorites: (state, action) => {
      const index = state.favsIdArray.indexOf(action.payload)
      const newState = state.favsIdArray.splice(index, 1)
      state = newState
    },
  },
})

export const favoritesActions = favoritesSlice.actions
