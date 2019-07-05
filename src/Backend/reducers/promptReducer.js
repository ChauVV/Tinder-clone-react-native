import { actionsType } from 'utils/globalConstants'

const prompt = {
  isShow: false,
  message: ''
}
export default (state = prompt, action) => {
  switch (action.type) {
  case actionsType.UPDATE_PROMPT:
    return action.payload
  default:
    return state
  }
}
