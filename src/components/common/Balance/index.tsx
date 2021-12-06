import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useAppSelector } from 'store'
import colors from 'style/colors'
import { CurrenyItem } from 'types/types'

type Props = {
  selected: CurrenyItem
}
function Balance(props: Props) {
  const { selected } = props
  const balance = useAppSelector(state => state.balance)

  return (
    <Text testID={'balance-text'} style={styles.text}>
      Balance: {`${balance[selected.value]} ${selected?.symbolTxt}`}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.gunMetal,
    fontSize: 14,
    fontWeight: '100',
    maxWidth: 160
  }
})

export default Balance
