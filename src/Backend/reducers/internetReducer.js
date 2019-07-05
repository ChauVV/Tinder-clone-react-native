import { actionsType } from 'utils/globalConstants'

const internet = true
export default (state = internet, action) => {
  switch (action.type) {
  case actionsType.UPDATE_INTERNET_STATUS:
    return action.payload
  default:
    return state
  }
}
