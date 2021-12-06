import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import { startRehydrate } from './reducers/rehydrate.reducer'
import rootReducer from './reducers'
import sagas from './sagas'
import { Config as ReduxOfflineConfig } from '@redux-offline/redux-offline/lib/types'

function configureStore(initialState = {}, persistOffline = true) {
  const sagaMiddleware = createSagaMiddleware()

  let middlewares = applyMiddleware(sagaMiddleware)
  if (persistOffline) {
    const amendedConfig: Partial<ReduxOfflineConfig> = {
      ...offlineConfig,

      persistOptions: {
        whitelist: ['inputs', 'balance', 'rate'],
        transforms: [createBlacklistFilter('inputs', ['firstInputValue', 'secondInputValue'])]
      },
      persistCallback: () => store.dispatch(startRehydrate())
    }
    const composeEnhancers =
      (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
    middlewares = composeEnhancers(middlewares, offline(amendedConfig))
  }
  const store = createStore(rootReducer, initialState, middlewares)

  sagas.map(saga => sagaMiddleware.run(saga, store.dispatch))
  return store
}

const store = configureStore({}, true)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
