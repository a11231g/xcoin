import React, { memo, useState } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { Menu } from 'react-native-material-menu'
import { CurrenyItem } from 'types/types'
import styles from './styles'
import { Button, Icon } from 'react-native-elements'
import colors from 'style/colors'

type Props = {
  selected: CurrenyItem
  onChange: (val: CurrenyItem) => void
  data: CurrenyItem[]
}
function Select(props: Props) {
  const { data, selected, onChange } = props
  const [visible, setVisible] = useState(false)

  const showSelect = () => setVisible(true)
  const hideSelect = () => setVisible(false)

  const handleChange = (item: CurrenyItem) => () => {
    onChange(item)
    hideSelect()
  }

  const renderMenuItem = ({ item }: { item: CurrenyItem }) => {
    const isSelected = item.value === selected.value
    return (
      <TouchableOpacity
        key={item.value}
        testID={`menu-item-${item.value}`}
        onPress={handleChange(item)}
        style={[styles.menuItem, isSelected && styles.menuItemSelected]}
      >
        <Text style={styles.menuItemLabel}>{item.label}</Text>

        {isSelected && <Icon name={'check'} color={'white'} />}
      </TouchableOpacity>
    )
  }

  const anchor = () => {
    const label = data.find(item => item.value === selected.value)?.label ?? ''
    return (
      <Button
        style={styles.anchor}
        type={'outline'}
        title={label}
        onPress={showSelect}
        icon={<Icon name={'chevron-down'} style={styles.buttonIcon} color={colors.verified} />}
        iconPosition={'right'}
      />
    )
  }

  return (
    <Menu visible={visible} style={styles.menu} onRequestClose={hideSelect} anchor={anchor()}>
      <FlatList
        data={data}
        contentContainerStyle={styles.flatList}
        renderItem={renderMenuItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </Menu>
  )
}

export default memo(Select)
