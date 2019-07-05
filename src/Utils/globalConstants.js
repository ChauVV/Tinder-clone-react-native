import DeviceInfo from 'react-native-device-info'

export const TOKEN_IMAGE = 'Basic Z2VuY29pbjoxMjM0NTY3ODkwJA==' // gencoin:1234567890$

// const ProductUrl = 'https://prd-luyenthi-api.generali-life.com.vn'
const UATUrl = 'https://uat-luyenthi-api.generali-life.com.vn'

export const BaseURL = process.env['NODE_ENV'] === 'development' ? UATUrl : UATUrl

export const RouteKey = {
  MainStack: 'MainStack',
  HomeScreen: 'HomeScreen',
  SumPractice: 'SumPractice',
  TopicsPractice: 'TopicsPractice',
  TopicsPracticeDetail: 'TopicsPracticeDetail',
  PreTest: 'PreTest',
  PreTestResult: 'PreTestResult',
  AnswerList: 'AnswerList',
  GuideList: 'GuideList',
  GuideDetail: 'GuideDetail',
  Contact: 'Contact',
  Registor: 'Registor',
  Verify: 'Verify'
}
export const TABLE_TYPE = {
  SUM: 0,
  CURRECT: 1,
  FAIL: 2,
  NOT_ANSWER: 3
}
export const ANSWER = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
}
export const QUESTION_GROUP = {
  COMMON: 'Kiến thức chung',
  PRODUCT: 'KIẾN THỨC SẢN PHẨM'
}
export const KeyStore = {
  USER_DATA: 'USER_DATA'

}
export const QUESTION_STATUS = {
  NOT_ANSWER: 0,
  CURRECT: 1,
  FALT: 2
}
export const isTablet = DeviceInfo.isTablet()
// Redux
export const actionsType = {
  UPDATE_INTERNET_STATUS: 'UPDATE_INTERNET_STATUS',
  UPDATE_START_TIMER: 'UPDATE_START_TIMER',
  // Questions
  GET_QUESTIONS: 'GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS: 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_FAIL: 'GET_QUESTIONS_FAIL',

  // USER
  USER_REGISTOR: 'USER_REGISTOR',
  USER_REGISTOR_SUCCESS: 'USER_REGISTOR_SUCCESS',
  USER_REGISTOR_FAIL: 'USER_REGISTOR_FAIL',

  USER_VERIFY: 'USER_VERIFY',
  USER_VERIFY_SUCCESS: 'USER_VERIFY_SUCCESS',
  USER_VERIFY_FAIL: 'USER_VERIFY_FAIL',
  // Test

  GET_QUESTIONS_TEST: 'GET_QUESTIONS_TEST',
  GET_QUESTIONS_TEST_SUCCESS: 'GET_QUESTIONS_TEST_SUCCESS',
  GET_QUESTIONS_TEST_FAIL: 'GET_QUESTIONS_TEST_FAIL',

  UPDATE_QUESTIONS: 'UPDATE_QUESTIONS',
  UPDATE_QUESTIONS_SUCCESS: 'UPDATE_QUESTIONS_SUCCESS',

  UPDATE_QUESTIONS_TEST: 'UPDATE_QUESTIONS_TEST',
  UPDATE_QUESTIONS_TEST_SUCCESS: 'UPDATE_QUESTIONS_TEST_SUCCESS',

  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  OFF_NOTIFICATION: 'OFF_NOTIFICATION',

  // Prompt
  UPDATE_PROMPT: 'UPDATE_PROMPT',

  // NAVIGATION
  PUSH: 'push',
  POP: 'pop',
  POP_TO_TOP: 'popToTop',
  RESET_TO_ROUTE: 'resetToRoute',
  RESET: 'reset',
  CLEAR: 'clear'
}
export const initState = {
  currency: 'VND',
  language: 'vi'
}
/**
 * statusCode
 */
export const statusCode = {
  CODE_200: 200, // ok
  CODE_201: 201, // ok
  CODE_404: 404, // Not found
  CODE_500: 500 // Server error
}
