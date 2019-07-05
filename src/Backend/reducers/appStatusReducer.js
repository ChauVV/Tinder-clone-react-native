import { actionsType } from 'utils/globalConstants'
// const SimpleStore = require('react-native-simple-store')

const appStatus = {
  isLoading: false
}

export default (state = appStatus, action) => {
  switch (action.type) {
  case actionsType.GET_QUESTIONS:
  case actionsType.UPDATE_QUESTIONS:
  case actionsType.GET_QUESTIONS_TEST:
  case actionsType.USER_REGISTOR:
  case actionsType.USER_VERIFY:
    return { ...state, isLoading: true }

  case actionsType.UPDATE_APP_STATUS:
    return action.payload

  case actionsType.GET_QUESTIONS_SUCCESS:
  case actionsType.GET_QUESTIONS_FAIL:
  case actionsType.UPDATE_QUESTIONS_SUCCESS:
  case actionsType.GET_QUESTIONS_TEST_SUCCESS:
  case actionsType.GET_QUESTIONS_TEST_FAIL:
  case actionsType.USER_REGISTOR_SUCCESS:
  case actionsType.USER_REGISTOR_FAIL:
  case actionsType.USER_VERIFY_SUCCESS:
  case actionsType.USER_VERIFY_FAIL:
    return { ...state, isLoading: false }
  default:
    return state
  }
}
