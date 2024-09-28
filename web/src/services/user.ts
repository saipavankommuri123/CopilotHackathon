import axios from 'axios'
import { ILoginPayload, ISignupPayload } from '../interfaces/IUser'

export const signUp = async (payload: ISignupPayload) => {
  return { data: 'yes' }
  try {
    const response = await axios.post('https://your-api-endpoint.com/signup', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      // Handle successful response
      console.log('Signup successful')
      return response.data
    } else {
      // Handle error response

      console.error('Signup failed')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

export const login = async (payload: ILoginPayload) => {
  return {
    firstName: 'SAI',
    lastName: 'PAVAN',
    email: 'saikommuri@kpmg.com',
    role: 'coordinator',
    password: 'pavan123',
  }
  try {
    const response = await axios.post('https://your-api-endpoint.com/signup', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      // Handle successful response
      console.log('Signup successful')
      return response.data
    } else {
      // Handle error response

      console.error('Signup failed')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
