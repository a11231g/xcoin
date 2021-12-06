import { put, takeLatest, call, select } from 'redux-saga/effects'

import { getRates, getRatesFailure, getRatesSuccessful } from '../reducers/rate.reducer'
import { getRatesApi } from 'lib/getRatesApi'
import { changeInput, changeSecondSelect } from 'store/reducers/inputs.reducer'
import { RATE_OPERATOR } from 'constants/enum'

export function* getRateSaga() {
  try {
    const base = yield select(state => state.inputs.firstSelect)
    const res = yield call(getRatesApi, base.value)
    yield put(getRatesSuccessful(res.conversion_rates))
  } catch (e) {
    yield put(getRatesFailure(e))
  }
}

export function* getRatesSuccessfulSage() {
  const firstInputText = yield select(state => state.inputs.firstInputValue)
  yield put(changeInput({ val: firstInputText, mode: RATE_OPERATOR.minus }))
}

export function* watchGetRate() {
  yield takeLatest(getRates.toString(), getRateSaga)
}

export function* watchGetRatesSuccessful() {
  yield takeLatest(getRatesSuccessful.toString(), getRatesSuccessfulSage)
}

export function* watchChangeSecondSelect() {
  yield takeLatest(changeSecondSelect.toString(), getRatesSuccessfulSage)
}

export default [watchGetRate, watchGetRatesSuccessful, watchChangeSecondSelect]
