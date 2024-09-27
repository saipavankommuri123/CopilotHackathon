export interface ISignupPayload {
  firstName: string
  lastName: string
  email: string
  role: '' | 'contributor' | 'coordinator'
  password: string
}
