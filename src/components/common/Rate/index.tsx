import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from 'store'
import colors from 'style/colors'
import get from 'lodash/get'
import { LinearProgress } from 'react-native-elements'

function Rate() {
  const from = useAppSelector(state => state.inputs.firstSelect)
  const to = useAppSelector(state => state.inputs.secondSelect)
  const rates = useAppSelector(state => state.rate.rates)
  const loading = useAppSelector(state => state.rate.loading)

  return (
    <View style={styles.container}>
      {loading ? (
        <LinearProgress />
      ) : (
        <Text style={styles.text}>{`1 ${from.symbolTxt} = ${get(rates, `[${to.value}]`, '')} ${
          to.symbolTxt
        }`}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.gunMetal,
    fontSize: 14,
    fontWeight: 'bold'
  },
  container: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    height: 30,
    position: 'absolute',
    top: -15,
    zIndex: 1,
    left: 0
  }
})

export default Rate
