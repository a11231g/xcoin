import { Theme } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'
import colors from 'style/colors'

const theme: Theme = {
  colors: {
    primary: 'rgb(69,154,216)'
  },
  Icon: {
    type: 'material-community',
    containerStyle: {
      marginHorizontal: 8
    }
  },
  Input: {
    inputContainerStyle: {
      borderColor: '#ddd',
      borderBottomWidth: 1,
      height: 40,
      width: 120
    },
    inputStyle: {
      // paddingHorizontal: 10,
      // height: 40
    }
  },
  Button: {
    buttonStyle: {
      borderRadius: 28,
      height: 40
    },
    titleStyle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.gunMetal
    },
    loadingProps: {
      size: 12
    }
  }
}

export default theme
