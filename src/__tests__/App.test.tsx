/**
 * @jest-environment jsdom
 */
// Code block specifie this file is use jsdom as test present
import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../routes/Home'

describe('App test', () => {
  it('renders Hello World Message', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
