import { createSlice } from '@reduxjs/toolkit'

type BalanceState = {
  [key: string]: number
}

const initialState: BalanceState = {
  USD: 200,
  EUR: 150,
  GBP: 10
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    exChange(state) {
      return state
    },
    exChangeSuccessful(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
})

export const { exChange, exChangeSuccessful } = balanceSlice.actions

export default balanceSlice.reducer
