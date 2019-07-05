
// import ServerAPI from 'backend/api'
import { Alert } from 'react-native'
import { Observable } from 'rxjs'
import {
  actionsType, statusCode, RouteKey
} from 'utils/globalConstants'
import ServerApi from 'backend/api'

const showAlert = (title, message) => {
  Alert.alert(title, message)
}
export default (action$, store, dependencies) => {
  const registor$ = action$.ofType(actionsType.USER_REGISTOR).switchMap((action) => {
    return Observable.fromPromise(ServerApi.registor(action.payload)).mergeMap((response) => {
      console.log('registor$: ', response)
      try {
        if (response && response.status === statusCode.CODE_200) {
          if (response.data.status === statusCode.CODE_200) {
            if (response.data.data.isValidation) {
              return Observable.concat(
                Observable.of({ type: actionsType.USER_VERIFY_SUCCESS, payload: response.data.data }).delay(1000),
                Observable.of({ type: actionsType.PUSH, routeName: RouteKey.MainStack })
              )
            } else {
              return Observable.concat(
                Observable.of({ type: actionsType.USER_REGISTOR_SUCCESS, payload: response.data.data }).delay(1000),
                Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Verify, params: {email: action.payload.email} })
              )
            }
          } else {
            showAlert('Chú ý', 'Email không hợp lệ!')
            return Observable.concat(
              Observable.of({ type: actionsType.USER_REGISTOR_FAIL })
            )
          }
        } else {
          showAlert('Chú ý', 'Kết nối máy chủ thất bại!')
          return Observable.concat(
            Observable.of({ type: actionsType.USER_REGISTOR_FAIL })
          )
        }
      } catch (error) {
        showAlert('Chú ý', 'Kết nối máy chủ thất bại!')
        return Observable.concat(
          Observable.of({ type: actionsType.USER_REGISTOR_FAIL })
        )
      }
    })
  })

  const verify$ = action$.ofType(actionsType.USER_VERIFY).switchMap((action) => {
    return Observable.fromPromise(ServerApi.verify(action.payload)).mergeMap((response) => {
      console.log('registor$: ', response)
      try {
        if (response && response.status === statusCode.CODE_200) {
          if (response.data.status === statusCode.CODE_200) {
            return Observable.concat(
              Observable.of({ type: actionsType.USER_VERIFY_SUCCESS, payload: response.data.data }).delay(1000),
              Observable.of({ type: actionsType.PUSH, routeName: RouteKey.MainStack })
            )
          } else {
            showAlert('Chú ý', 'Mã OTP không đúng!')
            return Observable.concat(
              Observable.of({ type: actionsType.USER_VERIFY_FAIL })
            )
          }
        } else {
          showAlert('Chú ý', 'Kết nối máy chủ thất bại!')
          return Observable.concat(
            Observable.of({ type: actionsType.USER_VERIFY_FAIL })
          )
        }
      } catch (error) {
        showAlert('Chú ý', 'Kết nối máy chủ thất bại!')
        return Observable.concat(
          Observable.of({ type: actionsType.USER_VERIFY_FAIL })
        )
      }
    })
  })

  return Observable.merge(
    registor$,
    verify$
  )
}
