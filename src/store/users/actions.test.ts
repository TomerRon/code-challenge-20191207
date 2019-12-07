// tslint:disable:no-expression-statement
import {
  addUserError,
  addUserStart,
  addUserSuccess,
  fetchHobbiesStart,
  fetchHobbiesSuccess,
  fetchUsersStart,
  fetchUsersSuccess,
  selectUser
} from './actions'
import {
  ADD_USER_ERROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  FETCH_HOBBIES_START,
  FETCH_HOBBIES_SUCCESS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  IUser,
  SELECT_USER
} from './types'

describe('Users actions', () => {
  it('should create ADD_USER', () => {
    const payload = {
      name: 'foobar-name'
    }
    const expectedAction = {
      payload,
      type: ADD_USER_START
    }

    expect(addUserStart(payload)).toStrictEqual(expectedAction)
  })

  it('should create ADD_USER_SUCCESS', () => {
    const payload = {
      hobbies: {
        fetched: false,
        items: [],
        loading: false
      },
      id: 'foobar-id',
      name: 'foobar-name',
      selected: false
    }
    const expectedAction = {
      payload,
      type: ADD_USER_SUCCESS
    }

    expect(addUserSuccess(payload)).toStrictEqual(expectedAction)
  })

  it('should create ADD_USER_ERROR', () => {
    const payload = 'foobar-error'

    const expectedAction = {
      payload,
      type: ADD_USER_ERROR
    }

    expect(addUserError(payload)).toStrictEqual(expectedAction)
  })

  it('should create SELECT_USER', () => {
    const payload = 'foobar-id'

    const expectedAction = {
      payload,
      type: SELECT_USER
    }

    expect(selectUser(payload)).toStrictEqual(expectedAction)
  })

  it('should create FETCH_USERS_START', () => {
    const expectedAction = {
      type: FETCH_USERS_START
    }

    expect(fetchUsersStart()).toStrictEqual(expectedAction)
  })

  it('should create FETCH_USERS_START', () => {
    const payload: readonly IUser[] = []
    const expectedAction = {
      payload,
      type: FETCH_USERS_SUCCESS
    }

    expect(fetchUsersSuccess(payload)).toStrictEqual(expectedAction)
  })

  it('should create FETCH_HOBBIES_START', () => {
    const payload = 'foobar-id'
    const expectedAction = {
      payload,
      type: FETCH_HOBBIES_START
    }

    expect(fetchHobbiesStart(payload)).toStrictEqual(expectedAction)
  })

  it('should create FETCH_HOBBIES_SUCCESS', () => {
    const payload = {
      id: 'foobar-id',
      items: []
    }
    const expectedAction = {
      payload,
      type: FETCH_HOBBIES_SUCCESS
    }

    expect(fetchHobbiesSuccess(payload)).toStrictEqual(expectedAction)
  })
})
