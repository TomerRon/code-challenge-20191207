// tslint:disable:object-literal-sort-keys
import uuidv4 from 'uuid/v4'
import { IAddUserActionPayload, IHobby } from '../store/users/types'
import { IResponse, IUserResponse } from './types'

const MOCK_USERS_TABLE: readonly IUserResponse[] = [
  {
    id: 'mock-user-john',
    name: 'John'
  },
  {
    id: 'mock-user-paul',
    name: 'Paul'
  },
  {
    id: 'mock-user-george',
    name: 'George'
  },
  {
    id: 'mock-user-ringo',
    name: 'Ringo'
  }
]

const MOCK_HOBBIES_TABLE: readonly IHobby[] = [
  {
    userId: 'mock-user-john',
    name: 'Foobar'
  },
  {
    userId: 'mock-user-john',
    name: 'Foobar2'
  }
]

const withDelay = <T>(callback: () => T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(callback()), 1000))

const mockApi = {
  addUser: (
    payload: IAddUserActionPayload
  ): Promise<IResponse<IUserResponse>> =>
    withDelay<IResponse<IUserResponse>>(() =>
      payload.name.trim().length
        ? {
            body: { id: uuidv4(), name: payload.name.trim() },
            status: 200
          }
        : {
            error: 'User name cannot be empty.',
            status: 400
          }
    ),
  fetchUsers: (): Promise<IResponse<ReadonlyArray<IUserResponse>>> =>
    withDelay<IResponse<ReadonlyArray<IUserResponse>>>(() => ({
      body: MOCK_USERS_TABLE,
      status: 200
    })),
  fetchHobbies: (payload: string): Promise<IResponse<ReadonlyArray<IHobby>>> =>
    withDelay<IResponse<ReadonlyArray<IHobby>>>(() => ({
      body: MOCK_HOBBIES_TABLE.filter(hobby => hobby.userId === payload),
      status: 200
    }))
}

export default mockApi
