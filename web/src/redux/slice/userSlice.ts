import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  firstName: string
  lastName: string
  email: string
  role: '' | 'contributor' | 'coordinator'
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.role = action.payload.role
    },
  },
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer
