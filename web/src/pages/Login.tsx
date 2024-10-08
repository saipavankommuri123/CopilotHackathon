import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { login } from '../services/user'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { setUserData } from '../redux/slice/userSlice'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async () => {
    // Create the payload
    const payload = {
      email,
      password,
    }
    console.log('Payload:', payload)
    try {
      const res = await login(payload)
      if (res) {
        // Redirect to home page
        dispatch(setUserData(res))
        navigate('/')
      } else {
        // Show error message
        alert('Signup failed. Please try again.')
      }
    } catch (error) {
      console.error('Error during signup:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  // Check if all fields are filled
  const isFormValid = email && password

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Email ID" required>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password" required>
          <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!isFormValid}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

// Simulate a fake login API call
const fakeLoginApi = async (payload: { email: string; password: string }) => {
  console.log('Logging in with:', payload)
  return new Promise(resolve => setTimeout(() => resolve(true), 1000))
}

export default LoginPage
