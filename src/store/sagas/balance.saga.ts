import { put, takeLatest, select } from 'redux-saga/effects'

import { exChange, exChangeSuccessful } from '../reducers/balance.reducer'
import { changeFirstInput, changeSecondInput } from 'store/reducers/inputs.reducer'

export function* changeSage() {
  const firstInputValue = yield select(state => state.inputs.firstInputValue)
  const secondInputValue = yield select(state => state.inputs.secondInputValue)
  const secondSymbol = yield select(state => state.inputs.secondSelect.value)
  const firstSymbol = yield select(state => state.inputs.firstSelect.value)
  const balance = yield select(state => state.balance)
  const newBalance = {
    [firstSymbol]: balance[firstSymbol] - parseFloat(firstInputValue),
    [secondSymbol]: balance[secondSymbol] + parseFloat(secondInputValue)
  }
  yield put(exChangeSuccessful(newBalance))
  yield put(changeFirstInput(''))
  yield put(changeSecondInput(''))
}

export function* watchChange() {
  yield takeLatest(exChange.toString(), changeSage)
}

export default [watchChange]
