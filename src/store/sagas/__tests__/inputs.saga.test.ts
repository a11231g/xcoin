import { put } from 'redux-saga/effects'

import {
  changeFirstInput,
  changeSecondInput,
  changeInputError
} from 'store/reducers/inputs.reducer'
import { RATE_OPERATOR, CURRENCY } from 'constants/enum'

import { changeInputSage } from '../inputs.saga'

describe('inputs saga', () => {
  describe('change 11 dollar to euro with rate of 1.5 ', () => {
    const sagaPayload = { payload: { mode: RATE_OPERATOR.minus, val: '11' }, type: '1' }
    const balance = { EUR: 100, USD: 200 }
    const rates = { EUR: 1.5 }
    it('first input should be 11 and second 16.5', () => {
      const generator = changeInputSage(sagaPayload)
      expect(generator.next().value).toMatchObject({
        '@@redux-saga/IO': true,
        combinator: false,
        payload: { args: [] },
        type: 'SELECT'
      })
      expect(generator.next(CURRENCY.EUR).value).toMatchObject({
        '@@redux-saga/IO': true,
        combinator: false,
        payload: { args: [] },
        type: 'SELECT'
      })
      expect(generator.next(CURRENCY.USD).value).toMatchObject({
        '@@redux-saga/IO': true,
        combinator: false,
        payload: { args: [] },
        type: 'SELECT'
      })
      expect(generator.next(rates).value).toMatchObject({
        '@@redux-saga/IO': true,
        combinator: false,
        payload: { args: [] },
        type: 'SELECT'
      })
      expect(generator.next(balance).value).toMatchObject(put(changeSecondInput('16.5')))
      expect(generator.next().value).toMatchObject(put(changeFirstInput('11')))
      expect(generator.next().value).toMatchObject(put(changeInputError('')))
      expect(generator.next().done).toBe(true)
    })
  })
})
