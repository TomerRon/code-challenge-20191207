// tslint:disable:no-expression-statement
import usersReducer from './reducer'
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

const MOCK_USER: IUser = {
  hobbies: {
    fetched: false,
    items: [],
    loading: true
  },
  id: 'foobar-mock-user-id',
  name: 'foobar-mock-user-name',
  selected: false
}

describe('Users reducer', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {} as any)).toStrictEqual({
      error: null,
      items: [],
      loading: false
    })
  })

  it('should handle ADD_USER_START', () => {
    const payload = {
      name: 'foobar-name'
    }

    const expected = {
      error: null,
      items: [],
      loading: true
    }

    expect(
      usersReducer(undefined, {
        payload,
        type: ADD_USER_START
      })
    ).toStrictEqual(expected)
  })

  describe('should handle ADD_USER_SUCCESS', () => {
    it('with no users in store', () => {
      const payload = MOCK_USER

      const expected = {
        error: null,
        items: [payload],
        loading: false
      }

      expect(
        usersReducer(undefined, {
          payload,
          type: ADD_USER_SUCCESS
        })
      ).toStrictEqual(expected)
    })

    it('with existing users in store', () => {
      const prevState = {
        error: null,
        items: [MOCK_USER],
        loading: true
      }
      const payload = {
        hobbies: {
          fetched: false,
          items: [],
          loading: false
        },
        id: 'foobar-id-2',
        name: 'foobar-name-2',
        selected: false
      }

      const expected = {
        error: null,
        items: [...prevState.items, payload],
        loading: false
      }

      expect(
        usersReducer(prevState, {
          payload,
          type: ADD_USER_SUCCESS
        })
      ).toStrictEqual(expected)
    })
  })

  it('should handle ADD_USER_ERROR', () => {
    const payload = 'foobar-error'

    const expected = {
      error: payload,
      items: [],
      loading: false
    }

    expect(
      usersReducer(undefined, {
        payload,
        type: ADD_USER_ERROR
      })
    ).toStrictEqual(expected)
  })

  it('should handle SELECT_USER', () => {
    const prevState = {
      error: null,
      items: [MOCK_USER],
      loading: false
    }

    const expected = {
      ...prevState,
      items: [{ ...MOCK_USER, selected: true }]
    }

    expect(
      usersReducer(prevState, {
        payload: MOCK_USER.id,
        type: SELECT_USER
      })
    ).toStrictEqual(expected)
  })

  it('should handle FETCH_USERS_START', () => {
    const expected = {
      error: null,
      items: [],
      loading: true
    }

    expect(
      usersReducer(undefined, {
        type: FETCH_USERS_START
      })
    ).toStrictEqual(expected)
  })

  it('should handle FETCH_USERS_START', () => {
    const payload: readonly IUser[] = []
    const expected = {
      error: null,
      items: payload,
      loading: false
    }

    expect(
      usersReducer(undefined, {
        payload,
        type: FETCH_USERS_SUCCESS
      })
    ).toStrictEqual(expected)
  })

  it('should handle FETCH_HOBBIES_START', () => {
    const user = {
      hobbies: {
        fetched: false,
        items: [],
        loading: true
      },
      id: 'foobar-id',
      name: 'foobar-name',
      selected: false
    }

    const prevState = {
      error: null,
      items: [MOCK_USER, user],
      loading: false
    }

    const payload = user.id

    const expected = {
      error: null,
      items: [
        MOCK_USER,
        { ...user, hobbies: { fetched: false, items: [], loading: true } }
      ],
      loading: false
    }

    expect(
      usersReducer(prevState, {
        payload,
        type: FETCH_HOBBIES_START
      })
    ).toStrictEqual(expected)
  })

  it('should handle FETCH_HOBBIES_SUCCESS', () => {
    const user = {
      hobbies: {
        fetched: false,
        items: [],
        loading: true
      },
      id: 'foobar-id',
      name: 'foobar-name',
      selected: false
    }

    const prevState = {
      error: null,
      items: [MOCK_USER, user],
      loading: false
    }

    const payload = {
      id: user.id,
      items: [{ userId: user.id, name: 'foobar-hobby' }]
    }

    const expected = {
      error: null,
      items: [
        MOCK_USER,
        {
          ...user,
          hobbies: { fetched: true, items: payload.items, loading: false }
        }
      ],
      loading: false
    }

    expect(
      usersReducer(prevState, {
        payload,
        type: FETCH_HOBBIES_SUCCESS
      })
    ).toStrictEqual(expected)
  })
})
