import axios from 'axios'
const TIME_OUT = 1000 * 5 // 6s
/** ------------------------------------------*
* @method     : get
* @param      : url: string
* @param      : header: object
* @return     : promise
* @author     : Jack 2018-11-09 10:19:19
* @description: description
* ------------------------------------------- */
export const get = (url = '', header = {}) => {
  const config = { headers: header, timeout: TIME_OUT }
  return axios.get(url, config)
    .then(response => response)
    .catch(e => e)
}
/** ------------------------------------------*
* @method     : post
* @param      : url
* @param      : data
* @param      : header
* @return     : void
* @author     : Jack 2019-03-11 13:04:51
* @description: description
* ------------------------------------------- */
export const post = (url = '', data = {}, header = {}) => {
  const config = { headers: header, timeout: TIME_OUT }
  return axios.post(url, data, config)
    .then(response => response)
    .catch(e => e)
}
/** ------------------------------------------*
* @method     : put
* @param      : url
* @param      : data
* @param      : header
* @return     : void
* @author     : Jack 2019-03-13 17:09:18
* @description: description
* ------------------------------------------- */
export const put = (url = '', data = {}, header = {}) => {
  const config = { headers: header, timeout: TIME_OUT }
  return axios.put(url, data, config)
    .then(response => response)
    .catch(e => e)
}
