import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'
import { useFetch } from '../../util-hooks/useFetch'
import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

export default function NewMeetupForm() {
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [address, setAddress] = useState()
  const [description, setDescription] = useState()

  const { addMeetup } = useFetch({
    url: 'https://62813aef1020d8520586e92e.mockapi.io/meetups',
  })

  const navigate = useNavigate()

  const submitHandler = async e => {
    e.preventDefault()
    const id = uuidV4()
    try {
      await addMeetup({
        id: id,
        title: title,
        image: image,
        address: address,
        description: description,
      })
      navigate('/all-meetups')
    } catch (e) {
      console.error(e)
    }
  }

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
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
