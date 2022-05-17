import { useState } from 'react'

export const useCreateMeetup = () => {
  const [response, setResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = { url: 'https://62813aef1020d8520586e92e.mockapi.io/meetups' }

  const addMeetup = async inputData => {
    setLoading(true)
    try {
      const res = await fetch(options.url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ ...inputData }),
      })
      const resData = res.json()
      setResponse(resData)
      setLoading(false)
    } catch (e) {
      setError(e)
      setLoading(false)
    }
  }

  return {
    response,
    isLoading,
    error,
    addMeetup,
  }
}
