import { combineEpics } from 'redux-observable'

import userEpic from './userEpic'

export default combineEpics(
  userEpic
)
