
import { RootNavigator } from 'frontend/Containers/AppNavigator'
import { NavigationActions, StackActions } from 'react-navigation'
import { actionsType, RouteKey } from 'utils/globalConstants'

const getActiveRoute = (state) => {
  if (state.index !== undefined) {
    return getActiveRoute(state.routes[state.index])
  } else {
    return state
  }
}
export default (state, action) => {
  switch (action.type) {
  case actionsType.PUSH: {
    const lastRoute = getActiveRoute(state)
    if (action.routeName === lastRoute.routeName) {
      return state
    }
    const newState = RootNavigator.router.getStateForAction(NavigationActions.navigate({
      routeName: action.routeName, params: action.params
    }), state)
    return (newState || state)
  }

  case actionsType.POP: {
    const lastRoute = getActiveRoute(state)
    if (lastRoute.routeName === RouteKey.HomeScreen) {
      return state
    }
    const newState = RootNavigator.router.getStateForAction(NavigationActions.back(), state)
    return (newState || state)
  }

  case actionsType.POP_TO_TOP: {
    const lastRoute = getActiveRoute(state)
    if (lastRoute.routeName === RouteKey.HomeScreen) {
      return state
    }
    const newState = RootNavigator.router.getStateForAction(StackActions.popToTop({immediate: true}), state)
    return (newState || state)
  }

  case actionsType.RESET_TO_ROUTE: {
    const newState = RootNavigator.router.getStateForAction(StackActions.reset({
      index: 0,
      key: action.key,
      actions: [
        NavigationActions.navigate({ routeName: action.routeName, params: action.params })
      ]
    }), state)
    return newState || state
  }

  case actionsType.RESET:
    return {
      ...state,
      index: 0,
      routes: [{ key: 'Init', routeName: RouteKey.HomeScreen }]
    }
  case actionsType.CLEAR:
    return {}
  default: {
    const newState = RootNavigator.router.getStateForAction(action, state)
    return (newState || state)
  }
  }
}
