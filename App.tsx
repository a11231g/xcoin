import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import theme from 'style/theme'
import { Provider } from 'react-redux'
import store from 'store/configureStore'
import Home from 'screens/Home'
import { initializeHttp } from 'lib/http'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    initializeHttp()
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Home />
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  )
}
export default App
