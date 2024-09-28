import axios from 'axios'
import { ILoginPayload, ISignupPayload } from '../interfaces/IUser'
const API_URL = 'http://localhost:5000/api/users/signup'

export const signUp = async (payload: ISignupPayload) => {
  //return { data: 'yes' }
  try {
    const response = await axios.post(API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 201) {
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
  // return {
  //   firstName: 'SAI',
  //   lastName: 'PAVAN',
  //   email: 'saikommuri@kpmg.com',
  //   role: 'coordinator',
  //   password: 'pavan123',
  // }
  try {
    const response = await axios.post('http://localhost:5000/api/users/login', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('response', response)

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
