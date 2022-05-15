import { useState, useEffect, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

export default function Layout() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navbarControl = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', navbarControl)
    return () => {
      window.removeEventListener('scroll', navbarControl)
    }
  }, [navbarControl])

  return (
    <>
      <MainNavigation show={show} />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  )
}
