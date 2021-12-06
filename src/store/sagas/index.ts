import rehydrate from './rehydrate.saga'
import rate from './rate.saga'
import input from './inputs.saga'
import change from './balance.saga'

const sagas = [...rehydrate, ...rate, ...input, ...change]

export default sagas
