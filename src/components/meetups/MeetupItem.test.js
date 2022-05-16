import { render, screen } from '../../test-utils'
import MeetupItem from './MeetupItem'

describe('testing MeetupItem', () => {
  const mockItem = {
    id: 'm3',
    title: 'This is a third meetup',
    image:
      'https://www.deutschakademie.de/muenchen/blog/wp-content/uploads/2021/03/Mu%CC%88nchen-Alemania.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  }

  test('Renders item', () => {
    render(<MeetupItem item={mockItem} />)
    const button = screen.getByText('Add to favorites')
    expect(button).toBeInTheDocument()
  })
})
