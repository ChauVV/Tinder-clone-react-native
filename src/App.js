import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import storeRedux from 'backend/store'
import { AppNavigator } from 'frontend/Containers/AppNavigator'
import OverlayView from 'frontend/Containers/AppNavigator/OverlayView'

const App = () => {
  return (
    <Provider store={storeRedux}>
      <View style={{flex: 1}}>
        <AppNavigator/>
        <OverlayView/>
      </View>
    </Provider>
  )
}
export default App
