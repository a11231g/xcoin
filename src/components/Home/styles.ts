import { StyleSheet } from 'react-native'
import colors from 'style/colors'

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
  background: {
    backgroundColor: colors.lightGrey,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    position: 'relative',
    overflow: 'visible'
  },
  title: {
    color: colors.gunMetal,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  mrb: {
    marginBottom: 10
  },
  button: {
    backgroundColor: colors.watermelon,
    borderRadius: 0,
    marginTop: 20
  },
  buttonTitle: {
    color: 'white'
  }
})

export default styles
