import React from 'react'
import renderer from 'react-test-renderer'

import Balance from '../index'
import { CURRENCY, SYMBOL } from 'constants/enum'
import { Provider } from 'react-redux'
import store from 'store/configureStore'

function getValueByTestID(testRenderer: any, testID: string) {
  return testRenderer.root.findByProps({ testID }).props.children
}

describe('<Balance />', () => {
  it('renders correctly', () => {
    const selected = {
      value: CURRENCY.USD,
      label: CURRENCY.USD,
      symbolTxt: SYMBOL.USD
    }
    const testRenderer = renderer.create(
      <Provider store={store}>
        <Balance selected={selected} />
      </Provider>
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()

    expect(getValueByTestID(testRenderer, 'balance-text')).toEqual(['Balance: ', '200 $'])
  })
})
