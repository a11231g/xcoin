import { CURRENCY, RATE_OPERATOR, SYMBOL } from 'constants/enum'

export type CurrenyItem = {
  label: CURRENCY
  value: CURRENCY
  symbolTxt: SYMBOL
}

export type ChangeInputPayload = {
  val: string
  mode: RATE_OPERATOR
}
