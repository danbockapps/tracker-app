import { StatusBar } from 'expo-status-bar'
import { FC, createContext, useState } from 'react'
import Login from './Login'
import Reports from './Reports'

const AppContext = createContext({})

const App: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? <Reports /> : <Login />}
      <StatusBar style='auto' />
    </AppContext.Provider>
  )
}

export default App
