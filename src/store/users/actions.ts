import {
  ADD_USER_ERROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  FETCH_HOBBIES_START,
  FETCH_HOBBIES_SUCCESS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  IAddUserActionPayload,
  IFetchHobbiesSuccessActionPayload,
  IUser,
  SELECT_USER,
  UsersActionTypes
} from './types'

export const addUserStart = (
  payload: IAddUserActionPayload
): UsersActionTypes => ({
  payload,
  type: ADD_USER_START
})

export const addUserSuccess = (payload: IUser): UsersActionTypes => ({
  payload,
  type: ADD_USER_SUCCESS
})

export const addUserError = (payload: string): UsersActionTypes => ({
  payload,
  type: ADD_USER_ERROR
})

export const selectUser = (payload: string): UsersActionTypes => ({
  payload,
  type: SELECT_USER
})

export const fetchUsersStart = (): UsersActionTypes => ({
  type: FETCH_USERS_START
})

export const fetchUsersSuccess = (
  payload: readonly IUser[]
): UsersActionTypes => ({
  payload,
  type: FETCH_USERS_SUCCESS
})

export const fetchHobbiesStart = (payload: string): UsersActionTypes => ({
  payload,
  type: FETCH_HOBBIES_START
})

export const fetchHobbiesSuccess = (
  payload: IFetchHobbiesSuccessActionPayload
): UsersActionTypes => ({
  payload,
  type: FETCH_HOBBIES_SUCCESS
})
