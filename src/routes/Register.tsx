import React, { useState } from 'react'
import RegisterForm from '../components/registerForm'
export default function RegisterPage() {
  const [addUser, setUser] = useState()
  const handAddUser = () => {
    setUser(addUser)
  }
  return (
    <div>
      <RegisterForm onSave={handAddUser} />
    </div>
  )
}
