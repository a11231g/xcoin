import { createSlice } from '@reduxjs/toolkit'

type RehydrateState = {
  rehydrate: boolean
  navigationReady: boolean
}

const initialState: RehydrateState = {
  rehydrate: false,
  navigationReady: false
}

const rehydrateSlice = createSlice({
  name: 'rehydrate',
  initialState,
  reducers: {
    startRehydrate(state) {
      return state
    },
    rehydrateSuccess(state) {
      return {
        ...state,
        rehydrate: true
      }
    },
    navigationReady(state) {
      return {
        ...state,
        navigationReady: true
      }
    }
  }
})

export const { startRehydrate, rehydrateSuccess, navigationReady } = rehydrateSlice.actions

export default rehydrateSlice.reducer
