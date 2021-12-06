import { createSlice } from '@reduxjs/toolkit'
import { WALLETS } from 'constants/wallets'
import { CurrenyItem } from 'types/types'

type InputsState = {
  firstSelect: CurrenyItem
  secondSelect: CurrenyItem
  firstInputValue: string
  secondInputValue: string
  inputError: boolean
  error: string
}

const initialState: InputsState = {
  firstSelect: WALLETS[0],
  secondSelect: WALLETS[1],
  firstInputValue: '',
  secondInputValue: '',
  inputError: false,
  error: ''
}

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    changeFirstSelect(state, { payload }) {
      return {
        ...state,
        firstSelect: payload
      }
    },
    changeSecondSelect(state, { payload }) {
      return {
        ...state,
        secondSelect: payload
      }
    },
    changeInput(state, _payload) {
      return state
    },
    changeFirstInput(state, { payload }) {
      return {
        ...state,
        firstInputValue: payload
      }
    },
    changeSecondInput(state, { payload }) {
      return {
        ...state,
        secondInputValue: payload
      }
    },
    changeInputError(state, { payload }) {
      return {
        ...state,
        error: payload
      }
    }
  }
})

export const {
  changeFirstSelect,
  changeSecondInput,
  changeFirstInput,
  changeSecondSelect,
  changeInput,
  changeInputError
} = inputsSlice.actions

export default inputsSlice.reducer
