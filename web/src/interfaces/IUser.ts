export interface ISignupPayload {
  firstName: string
  lastName: string
  email: string
  role: '' | 'contributor' | 'coordinator'
  password: string
}

export interface ILoginPayload {
  email: string
  password: string
}
