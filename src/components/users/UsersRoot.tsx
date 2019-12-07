import React from 'react'
import { IAddUserActionPayload, IUser } from '../../store/users/types'
import UserInput from './UserInput'

interface IProps {
  readonly error: string | null
  readonly loading: boolean
  readonly onAddUser: (user: IAddUserActionPayload) => void
  readonly onSelectUser: (id: string) => void
  readonly users: readonly IUser[]
}

const UsersRoot: React.FC<IProps> = ({
  error,
  loading,
  onAddUser,
  onSelectUser,
  users
}) => {
  const UserItem = ({ id, name, selected }: IUser) => (
    <div
      onClick={() => onSelectUser(id)}
      key={id}
      style={{ fontWeight: selected ? 'bold' : 'normal' }}
    >
      {name}
    </div>
  )

  return (
    <div>
      <UserInput loading={loading} onAddUser={onAddUser} />
      {users.map(UserItem)}
      <p>{error}</p>
    </div>
  )
}

export default UsersRoot
