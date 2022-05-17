import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useCreateMeetup } from '../../util-hooks/useCreateMeetup'

export default function NewMeetupForm() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const { addMeetup, response, isLoading, error } = useCreateMeetup()

  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    const id = uuidV4()
    addMeetup({
      id: id,
      title: title,
      image: image,
      address: address,
      description: description,
    })
  }

  useEffect(() => {
    response && navigate('/all-meetups')
  }, [response, navigate])

  if (error)
    return (
      <Card>
        <p>Error creating the Meetup: {error.message}</p>
      </Card>
    )

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input
            value={title}
            type='text'
            required
            id='title'
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input
            value={image}
            type='url'
            required
            id='image'
            onChange={e => setImage(e.currentTarget.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input
            value={address}
            type='text'
            required
            id='address'
            onChange={e => setAddress(e.currentTarget.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            onChange={e => setDescription(e.currentTarget.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{isLoading ? 'Creating Meetup...' : 'Add Meetup'}</button>
        </div>
      </form>
    </Card>
  )
}
