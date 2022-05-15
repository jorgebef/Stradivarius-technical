import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

export default function MainNavigation({ show }) {
  const { favsIdArray } = useSelector(state => state.favorites)

  useEffect(() => {
    // store in localstorage every time the favorites array changes
    // this allows the favorites to persist in localstorage
    localStorage.setItem('favorites', JSON.stringify(favsIdArray))
  }, [favsIdArray])

  // Create custom nav link so that will have the active property when the
  // linked page is active or hovered
  const CustomNavLink = props => {
    return (
      <NavLink
        {...props}
        className={({ isActive }) => (isActive ? classes.active : null)}
      >
        {props.children}
      </NavLink>
    )
  }

  return (
    <header
      className={classes.header}
      style={{ top: show ? 0 : '-100%' }}
      data-test='navigation-header'
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <CustomNavLink to='all-meetups'>All Meetups</CustomNavLink>
          </li>

          <li>
            <CustomNavLink to='new-meetups'>Add New Meetup</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to='favorites'>
              My Favorites
              <span className={classes.badge}>{favsIdArray.length}</span>
            </CustomNavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
