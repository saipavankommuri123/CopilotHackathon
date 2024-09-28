import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import { signUp } from '../services/user'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const SignupPage: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<'contributor' | 'coordinator' | ''>('')
  const [password, setPassword] = useState('')
  const [designation, setDesignation] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    // Encrypt the password

    // Create the payload
    const payload = {
      firstName,
      lastName,
      email,
      role,
      password,
      designation
    }
    console.log('Payload:', payload)

    try {
      const res = await signUp(payload)
      if (res) {
        // Redirect to home page
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
  const isFormValid = firstName && lastName && email && role && password

  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="First Name" required>
          <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Last Name" required>
          <Input value={lastName} onChange={e => setLastName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email ID" required>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Designation" required>
          <Input value={designation} onChange={e => setDesignation(e.target.value)} />
        </Form.Item>

        <Form.Item label="Role" required>
          <Radio.Group value={role} onChange={e => setRole(e.target.value as 'contributor' | 'coordinator')}>
            <Radio value="contributor">Contributor</Radio>
            <Radio value="coordinator">Coordinator</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Password" required>
          <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!isFormValid}>
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignupPage
