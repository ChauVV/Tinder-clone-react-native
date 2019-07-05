import { createStackNavigator } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import transition from './transitions'

import ReactMe from 'frontend/Screens/ReactMe'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.navigate
)

const RootNavigator = createStackNavigator(
  {
    ReactMe: { screen: ReactMe }
  }, {
    headerMode: 'none',
    transitionConfig: transition
  }
)

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = (state) => ({
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
