import { put, takeLatest, select } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import {
  changeInput,
  changeFirstInput,
  changeSecondInput,
  changeInputError
} from '../reducers/inputs.reducer'
import { ChangeInputPayload } from 'types/types'
import { RATE_OPERATOR } from 'constants/enum'
import { ERROR } from 'constants/errors'

export function* changeInputSage(action: PayloadAction<ChangeInputPayload>) {
  const payload = action.payload
  const { mode, val } = payload
  const secondSymbol = yield select(state => state.inputs.secondSelect.value)
  const firstSymbol = yield select(state => state.inputs.firstSelect.value)
  const rates = yield select(state => state.rate.rates)
  const balance = yield select(state => state.balance)
  const num = parseFloat(val)

  let firstInputText = ''
  let secondInputText = ''
  let error = ''

  if (val.length > 0) {
    if (mode === RATE_OPERATOR.minus) {
      firstInputText = val
      secondInputText = (num * rates[secondSymbol]).toString()
    } else {
      secondInputText = val
      firstInputText = (num / rates[secondSymbol]).toString()
    }
  }
  if (parseFloat(firstInputText) > balance[firstSymbol]) {
    error = ERROR.noEnoughMoney
  }
  yield put(changeSecondInput(secondInputText))
  yield put(changeFirstInput(firstInputText))
  yield put(changeInputError(error))
}

export function* watchChangeInput() {
  yield takeLatest(changeInput.toString(), changeInputSage)
}

export default [watchChangeInput]
