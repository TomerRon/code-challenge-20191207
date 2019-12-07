// tslint:disable no-expression-statement
import mockApi from '../mockApi'
import { ISuccessResponse, IUserResponse } from '../mockApi/types'
import { isSuccessResponse } from '../mockApi/utils'
import { AppThunk } from './store'
import {
  addUserError,
  addUserStart,
  addUserSuccess,
  fetchHobbiesStart,
  fetchHobbiesSuccess,
  fetchUsersStart,
  fetchUsersSuccess
} from './users/actions'
import { IAddUserActionPayload, IHobby, IUser } from './users/types'

export const addUser = (
  payload: IAddUserActionPayload
): AppThunk => async dispatch => {
  dispatch(addUserStart(payload))
  const response = await mockApi.addUser(payload)

  isSuccessResponse(response)
    ? dispatch(
        addUserSuccess({
          ...response.body,
          hobbies: { fetched: false, items: [], loading: false },
          selected: false
        })
      )
    : dispatch(addUserError(response.error))
}

export const fetchUsers = (): AppThunk => async dispatch => {
  dispatch(fetchUsersStart())
  const response = await mockApi.fetchUsers()
  const users: readonly IUser[] = (response as ISuccessResponse<
    ReadonlyArray<IUserResponse>
  >).body.map(user => ({
    ...user,
    hobbies: {
      fetched: false,
      items: [],
      loading: false
    },
    selected: false
  }))

  dispatch(fetchUsersSuccess(users))
}

export const fetchHobbies = (payload: string): AppThunk => async dispatch => {
  dispatch(fetchHobbiesStart(payload))
  const response = await mockApi.fetchHobbies(payload)
  const items = (response as ISuccessResponse<ReadonlyArray<IHobby>>).body

  dispatch(fetchHobbiesSuccess({ items, id: payload }))
}
