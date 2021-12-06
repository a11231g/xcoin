import React, { useEffect } from 'react'
import Select from 'components/common/Select'
import { View, Text } from 'react-native'
import { WALLETS } from 'constants/wallets'
import { Button, Input, Icon } from 'react-native-elements'
import { useAppDispatch, useAppSelector } from 'store'
import { changeFirstSelect, changeSecondSelect, changeInput } from 'store/reducers/inputs.reducer'
import { getRates } from 'store/reducers/rate.reducer'
import Balance from 'components/common/Balance'
import styles from './styles'
import { ChangeInputPayload, CurrenyItem } from 'types/types'
import { RATE_OPERATOR } from 'constants/enum'
import Rate from 'components/common/Rate'
import { exChange } from 'store/reducers/balance.reducer'

const Home = () => {
  const firstSelectValue = useAppSelector(state => state.inputs.firstSelect)
  const secondSelectValue = useAppSelector(state => state.inputs.secondSelect)
  const firstInputValue = useAppSelector(state => state.inputs.firstInputValue)
  const secondInputValue = useAppSelector(state => state.inputs.secondInputValue)
  const error = useAppSelector(state => state.inputs.error)
  const loading = useAppSelector(state => state.rate.loading)
  const dispatch = useAppDispatch()

  const changeFirst = (val: CurrenyItem) => {
    dispatch(changeFirstSelect(val))
  }

  const changeSecond = (val: CurrenyItem) => {
    dispatch(changeSecondSelect(val))
  }
  useEffect(() => {
    dispatch(getRates())
  }, [firstSelectValue, dispatch])

  useEffect(() => {
    dispatch(getRates())
  }, [dispatch])

  const changeInputText = (data: ChangeInputPayload) => {
    dispatch(changeInput(data))
  }

  const change = () => {
    dispatch(exChange())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CoinX exchange</Text>
      <View style={styles.section}>
        <View>
          <View style={styles.mrb}>
            <Select data={WALLETS} onChange={changeFirst} selected={firstSelectValue} />
          </View>
          <Balance selected={firstSelectValue} />
        </View>
        <View>
          <Input
            leftIcon={<Icon name='minus' size={12} color='gray' />}
            value={firstInputValue}
            keyboardType='numeric'
            errorMessage={error}
            onChangeText={v => {
              changeInputText({ val: v, mode: RATE_OPERATOR.minus })
            }}
          />
        </View>
      </View>
      <View style={[styles.background, styles.section]}>
        <View>
          <View style={styles.mrb}>
            <Select data={WALLETS} onChange={changeSecond} selected={secondSelectValue} />
          </View>
          <Balance selected={secondSelectValue} />
        </View>
        <View>
          <Input
            leftIcon={<Icon name='plus' size={12} color='gray' />}
            value={secondInputValue}
            keyboardType='numeric'
            onChangeText={v => {
              changeInputText({ val: v, mode: RATE_OPERATOR.plus })
            }}
          />
        </View>
        <Rate />
      </View>
      <Button
        title={'Exchange'}
        disabled={
          error.length > 0 ||
          loading ||
          firstInputValue.length <= 0 ||
          firstSelectValue.value === secondSelectValue.value
        }
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={change}
      />
    </View>
  )
}

export default Home
