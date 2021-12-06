import { put, takeEvery } from 'redux-saga/effects'

import { rehydrateSuccess, startRehydrate } from '../reducers/rehydrate.reducer'

export function* rehydrateSaga() {
  yield put(rehydrateSuccess())
}

export function* watchRehydrate() {
  yield takeEvery(startRehydrate.toString(), rehydrateSaga)
}

export default [watchRehydrate]
