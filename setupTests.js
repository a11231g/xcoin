import expect from 'expect'

import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import mockNetInfo from '@react-native-community/netinfo/jest/netinfo-mock'

configure({ adapter: new Adapter() })

jest.useFakeTimers()

jest.mock('react-native/Libraries/ReactNative/AppRegistry')
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)
jest.mock('@react-native-community/netinfo', () => mockNetInfo)

expect.extend({
  /**
   * Checks if mocked component has ever received expected props.
   *
   * @param {*} received
   * @param {*} expected
   */
  toHaveReceivedProps(received, expected) {
    const passedProps = received.mock.calls.map(call => call[0])

    try {
      expect(passedProps).toContainEqual(expect.objectContaining(expected))
    } catch (e) {
      return {
        pass: false,
        message: () =>
          this.utils.matcherHint('.toHaveReceivedProps') +
          '\n\n' +
          'Expected component to receive props:\n' +
          `  ${this.utils.printExpected(expected)}\n` +
          'but received:\n' +
          `  ${this.utils.printReceived(passedProps)}`
      }
    }

    return { pass: true }
  },

  /**
   * Checks if mocked component received expected last props.
   * It only compares props from the last component call/render.
   *
   * @param {*} received
   * @param {*} expected
   */
  toHaveReceivedLastProps(received, expected) {
    if (received.mock.calls.length === 0) {
      return {
        pass: false,
        message: () => 'Component has not been called at all'
      }
    }

    const lastProps = received.mock.calls[received.mock.calls.length - 1][0]

    try {
      expect(lastProps).toMatchObject(expected)
    } catch (e) {
      return {
        pass: false,
        message: () =>
          this.utils.matcherHint('.toHaveReceivedLastProps') +
          '\n\n' +
          'Expected component to receive props:\n' +
          `  ${this.utils.printExpected(expected)}\n` +
          'but received:\n' +
          `  ${this.utils.printReceived(lastProps)}`
      }
    }

    return { pass: true }
  }
})
