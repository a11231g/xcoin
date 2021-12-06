import { StyleSheet } from 'react-native'
import colors from 'style/colors'

const styles = StyleSheet.create({
  menu: {
    width: 130,
    borderRadius: 5
  },
  flatList: {
    borderRadius: 8,
    paddingTop: 4,
    paddingHorizontal: 4
  },
  menuItem: {
    height: 40,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  },
  menuItemLabel: {
    lineHeight: 15.6,
    letterSpacing: 0.03
  },
  menuItemSelected: {
    backgroundColor: colors.verified,
    borderRadius: 8,
    color: 'white'
  },
  anchor: {
    width: 80
  },
  buttonIcon: {
    width: 16
  }
})

export default styles
