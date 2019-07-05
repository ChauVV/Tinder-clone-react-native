import { get, post } from 'backend/api/baseApi'
import { BaseURL } from 'utils/globalConstants'

export default class ServerApi {
  /** ------------------------------------------*
  * Group Code: Questions
  * ------------------------------------------- */
  static getQuestionFromApi = () => {
    const url = BaseURL + `/data/get`
    const header = {
      'Content-Type': 'application/json'
    }
    console.log('url: ', url)
    return get(url, header)
  }

  static registor = (payload) => {
    const { email } = payload

    const url = BaseURL + `/users/create`
    const header = {
      'Content-Type': 'application/json'
    }

    const data = {email}
    console.log('url: ', url)
    return post(url, data, header)
  }

  static verify = (payload) => {
    const { email, code } = payload
    const url = BaseURL + `/users/validate`
    const header = {
      'Content-Type': 'application/json'
    }
    const data = {email, code}
    console.log('url: ', url)
    return post(url, data, header)
  }
}
