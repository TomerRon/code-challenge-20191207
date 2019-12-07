import {
  ADD_USER_ERROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  FETCH_HOBBIES_START,
  FETCH_HOBBIES_SUCCESS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  IUsersState,
  SELECT_USER,
  UsersActionTypes
} from './types'

const initialState: IUsersState = {
  error: null,
  items: [],
  loading: false
}

const usersReducer = (
  state = initialState,
  action: UsersActionTypes
): IUsersState => {
  switch (action.type) {
    case ADD_USER_START:
      return {
        ...state,
        error: null,
        loading: true
      }
    case ADD_USER_SUCCESS:
      return {
        error: null,
        items: [...state.items, action.payload],
        loading: false
      }
    case ADD_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SELECT_USER:
      return {
        ...state,
        items: state.items.map(user => ({
          ...user,
          selected: user.id === action.payload
        }))
      }
    case FETCH_USERS_START:
      return {
        error: null,
        items: [],
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        error: null,
        items: action.payload,
        loading: false
      }
    case FETCH_HOBBIES_START:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.payload
            ? { ...user, hobbies: { fetched: false, items: [], loading: true } }
            : user
        )
      }
    case FETCH_HOBBIES_SUCCESS:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.payload.id
            ? {
                ...user,
                hobbies: {
                  fetched: true,
                  items: action.payload.items,
                  loading: false
                }
              }
            : user
        )
      }
    default:
      return state
  }
}

export default usersReducer
