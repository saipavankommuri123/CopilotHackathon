import axios from 'axios'
import { ISignupPayload } from '../interfaces/IUser'

export const signUp = async (payload: ISignupPayload) => {
    return {data: "yes"}
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
