import { render, screen } from '@testing-library/react'
import MeetupItem from './MeetupItem'

describe('testing main App', () => {
  test('renders App', () => {
    render(<MeetupItem />)
    const app = screen.getByText(/react meetups/i)
    expect(app).toBeInTheDocument()
  })
})
