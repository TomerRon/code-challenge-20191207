import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UsersRoot from '../components/users/UsersRoot'
import { useSelector } from '../store/store'
import { addUser, fetchUsers } from '../store/thunks'
import { selectUser } from '../store/users/actions'
import { IAddUserActionPayload } from '../store/users/types'

const Users: React.FC = () => {
  const { error, items, loading } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const handleAddUser = (user: IAddUserActionPayload) => dispatch(addUser(user))
  const handleSelectUser = (id: string) => dispatch(selectUser(id))

  // tslint:disable:no-expression-statement
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  // tslint:enable:no-expression-statement

  return (
    <UsersRoot
      error={error}
      onAddUser={handleAddUser}
      onSelectUser={handleSelectUser}
      loading={loading}
      users={items}
    />
  )
}

export default Users
