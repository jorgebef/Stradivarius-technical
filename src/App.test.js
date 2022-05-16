import { render, screen } from '@testing-library/react'

import App from './App'

describe('testing main App', () => {
  test('renders App', () => {
    render(<App />)
    const app = screen.getByText(/react meetups/i)
    expect(app).toBeInTheDocument()
  })
})
