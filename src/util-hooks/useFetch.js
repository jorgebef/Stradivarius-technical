import { useState, useEffect } from 'react'

export const useFetch = options => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(options.url)
        const resData = await res.json()
        setData(resData)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [options.url])

  const addMeetup = async inputData => {
    await fetch(options.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ ...inputData }),
    })
  }

  return {
    data,
    addMeetup,
  }
}
