import { createSlice } from '@reduxjs/toolkit'
import { CURRENCY } from 'constants/enum'

type RateState = {
  rates:
    | {
        [key in CURRENCY]: number
      }
    | {}
  loading: boolean
  error: null | string
}

const initialState: RateState = {
  rates: {},
  loading: false,
  error: null
}

const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    getRates(state) {
      return {
        ...state,
        loading: true,
        // rates: {},
        error: null
      }
    },
    getRatesSuccessful(state, { payload }) {
      return {
        ...state,
        loading: false,
        error: null,
        rates: payload
      }
    },
    getRatesFailure(state, { payload }) {
      return {
        ...state,
        loading: false,
        rates: {},
        error: payload
      }
    }
  }
})

export const { getRates, getRatesFailure, getRatesSuccessful } = rateSlice.actions

export default rateSlice.reducer
