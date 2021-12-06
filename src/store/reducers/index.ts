import { combineReducers } from '@reduxjs/toolkit'

import rehydrate from './rehydrate.reducer'
import inputs from './inputs.reducer'
import balance from './balance.reducer'
import rate from './rate.reducer'

const rootReducer = combineReducers({
  rehydrate,
  inputs,
  balance,
  rate
})

export default rootReducer
