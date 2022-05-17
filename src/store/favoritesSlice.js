import { createSlice } from '@reduxjs/toolkit'

const getSavedState = () => {
  const serializedState = localStorage.getItem('favorites')
  const savedTimeStamp = localStorage.getItem('favoritesTimeStamp')
  console.log('SAVED TIMESTAMP: ' + savedTimeStamp)
  // Check if the stored favorites are older than 60 min
  if (Number(Date.now()) - Number(savedTimeStamp) < 1000 * 60 * 60) {
    console.log(Date.now() - savedTimeStamp)
    return serializedState ? JSON.parse(serializedState) : []
  } else {
    return []
  }
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
