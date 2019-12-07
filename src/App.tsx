import React from 'react'
import { Provider } from 'react-redux'
import Users from './containers/Users'
import { store } from './store/store'

const App: React.FC = () => (
  <Provider store={store}>
    <Users />
  </Provider>
)

export default App
