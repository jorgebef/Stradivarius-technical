import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetupsPage'
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetup'

import Layout from './components/layout/Layout'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <div data-test='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='all-meetups' element={<AllMeetupsPage />} />
              <Route path='new-meetups' element={<NewMeetupsPage />} />
              <Route path='favorites' element={<FavoritesPage />} />
              <Route path='' element={<Navigate to='/all-meetups' replace />} />
              <Route
                path='*'
                element={<Navigate to='/all-meetups' replace />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
