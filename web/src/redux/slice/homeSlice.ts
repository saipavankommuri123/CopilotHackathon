import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HomeState {
  value: number
}

const initialState: HomeState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
