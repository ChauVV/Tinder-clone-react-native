import { middlewareNav } from 'frontend/Containers/AppNavigator'
import { applyMiddleware, compose, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import epics from 'backend/epics'
import reducers from 'backend/reducers'

// Create middlewares
const epicMiddleware = createEpicMiddleware(epics)

const middlewares = [
  epicMiddleware,
  middlewareNav
]
if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

// create store
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

export default store
