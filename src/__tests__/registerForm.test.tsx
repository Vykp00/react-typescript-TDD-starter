// Code block specifie this file is use jsdom as test present
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RegisterForm from '../components/registerForm'

test('It call onSave handler for email input', async () => {
  // Mock saveHandler
  const saveHandler = jest.fn()
  render(<RegisterForm onSave={saveHandler} />)

  // Type email to input form
  const input: HTMLElement = screen.getByTestId('newUserEmail')
  fireEvent.input(input, { values: 'maria.hellen@gmail.com' })
  const emailName = 'maria.hellen@gmail.com'

  // Click on Save button
  const button: HTMLElement = screen.getByTestId('newUserButton')
  fireEvent.click(button)

  // saveHandler should be called in form
  // Expect input to have new email value
  //expect(input).toHaveValue(emailName)
  expect(saveHandler).toHaveBeenCalledWith(emailName)
})
