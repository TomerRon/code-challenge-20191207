import React, { useEffect, useState } from 'react'
import { IAddUserActionPayload } from '../../store/users/types'

interface IProps {
  readonly loading: boolean
  readonly onAddUser: (user: IAddUserActionPayload) => void
}

const UserInput: React.FC<IProps> = ({ loading, onAddUser }) => {
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddUser({ name })
  }

  useEffect(() => {
    if (!loading) {
      setName('')
    }
  }, [loading])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button disabled={loading} type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default UserInput
