export interface IHobby {
  readonly userId: string
  readonly name: string
}

export interface IUserHobbies {
  readonly fetched: boolean
  readonly items: readonly IHobby[]
  readonly loading: boolean
}

export interface IUser {
  readonly hobbies: IUserHobbies
  readonly id: string
  readonly name: string
  readonly selected: boolean
}

export interface IUsersState {
  readonly error: string | null
  readonly items: readonly IUser[]
  readonly loading: boolean
}

/*
  Add user
*/
export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'

export interface IAddUserActionPayload {
  readonly name: string
}
interface IAddUserAction {
  readonly type: typeof ADD_USER_START
  readonly payload: IAddUserActionPayload
}

interface IAddUserSuccessAction {
  readonly type: typeof ADD_USER_SUCCESS
  readonly payload: IUser
}

interface IAddUserErrorAction {
  readonly type: typeof ADD_USER_ERROR
  readonly payload: string
}

/*
  Select user
*/

export const SELECT_USER = 'SELECT_USER'

interface ISelectUserAction {
  readonly type: typeof SELECT_USER
  readonly payload: string
}

/*
  Fetch users
*/
export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

interface IFetchUsersStartAction {
  readonly type: typeof FETCH_USERS_START
}

interface IFetchUsersSuccessAction {
  readonly type: typeof FETCH_USERS_SUCCESS
  readonly payload: readonly IUser[]
}

/*
  Fetch hobbies
*/
export const FETCH_HOBBIES_START = 'FETCH_HOBBIES_START'
export const FETCH_HOBBIES_SUCCESS = 'FETCH_HOBBIES_SUCCESS'

interface IFetchHobbiesStartAction {
  readonly payload: string
  readonly type: typeof FETCH_HOBBIES_START
}

export interface IFetchHobbiesSuccessActionPayload {
  readonly items: readonly IHobby[]
  readonly id: string
}
interface IFetchHobbiesSuccessAction {
  readonly type: typeof FETCH_HOBBIES_SUCCESS
  readonly payload: IFetchHobbiesSuccessActionPayload
}

export type UsersActionTypes =
  | IAddUserAction
  | IAddUserSuccessAction
  | IAddUserErrorAction
  | ISelectUserAction
  | IFetchUsersStartAction
  | IFetchUsersSuccessAction
  | IFetchHobbiesStartAction
  | IFetchHobbiesSuccessAction
