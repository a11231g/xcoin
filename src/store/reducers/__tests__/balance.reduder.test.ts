import balanceReducer, { exChangeSuccessful } from '../balance.reducer'

const initialState = {
  USD: 200,
  EUR: 150,
  GBP: 10
}
describe('balance reducer', () => {
  const payload = {
    GBP: 200
  }

  it('GBD balance should be 200', () => {
    const state = balanceReducer(initialState, exChangeSuccessful(payload))

    expect(state).toEqual({
      USD: 200,
      EUR: 150,
      GBP: 200
    })
  })
})
