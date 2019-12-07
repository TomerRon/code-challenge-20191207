/* istanbul ignore file */
import {
  TypedUseSelectorHook,
  useSelector as useSelectorUntyped
} from 'react-redux'
import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  users: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorUntyped

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
