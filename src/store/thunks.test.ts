// tslint:disable:no-expression-statement readonly-array
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addUser, fetchHobbies, fetchUsers } from './thunks'
import {
  ADD_USER_ERROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  FETCH_HOBBIES_START,
  FETCH_HOBBIES_SUCCESS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS
} from './users/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('thunks', () => {
  describe('addUser', () => {
    it('should dispatch ADD_USER and ADD_USER_SUCCESS on success', async () => {
      const payload = {
        name: 'foobar-name'
      }
      const expectedActions = [
        { type: ADD_USER_START, payload },
        {
          payload: {
            hobbies: {
              fetched: false,
              items: [],
              loading: false
            },
            id: expect.any(String),
            name: payload.name,
            selected: false
          },
          type: ADD_USER_SUCCESS
        }
      ]
      const store = mockStore()

      await store.dispatch<any>(addUser(payload))

      expect(store.getActions()).toStrictEqual(expectedActions)
    })

    it('should dispatch ADD_USER and ADD_USER_SUCCESS on error', async () => {
      const payload = {
        name: ''
      }
      const expectedActions = [
        { type: ADD_USER_START, payload },
        {
          payload: 'User name cannot be empty.',
          type: ADD_USER_ERROR
        }
      ]
      const store = mockStore()

      await store.dispatch<any>(addUser(payload))

      expect(store.getActions()).toStrictEqual(expectedActions)
    })
  })

  describe('fetchUsers', () => {
    it('should dispatch FETCH_USERS_START and FETCH_USERS_SUCCESS', async () => {
      const expectedActions = [
        { type: FETCH_USERS_START },
        {
          payload: expect.any(Array),
          type: FETCH_USERS_SUCCESS
        }
      ]
      const store = mockStore()

      await store.dispatch<any>(fetchUsers())

      expect(store.getActions()).toStrictEqual(expectedActions)
    })
  })

  describe('fetchHobbies', () => {
    it('should dispatch FETCH_HOBBIES_START and FETCH_HOBBIES_SUCCESS', async () => {
      const payload = 'foobar'
      const expectedActions = [
        { payload, type: FETCH_HOBBIES_START },
        {
          payload: {
            id: payload,
            items: expect.any(Array)
          },
          type: FETCH_HOBBIES_SUCCESS
        }
      ]
      const store = mockStore()

      await store.dispatch<any>(fetchHobbies('foobar'))

      expect(store.getActions()).toStrictEqual(expectedActions)
    })
  })
})
