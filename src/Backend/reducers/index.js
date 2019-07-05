import { combineReducers } from 'redux'

import routesReducer from './routersReducer'
import appStatusReducer from './appStatusReducer'
import internetReducer from './internetReducer'
import promptReducer from './promptReducer'

export default combineReducers({
  navigate: routesReducer,
  appStatus: appStatusReducer,
  internet: internetReducer,
  prompt: promptReducer
})
