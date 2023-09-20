import { StatusBar } from 'expo-status-bar'
import { FC, useState } from 'react'
import Login from './Login'
import Reports from './Reports'
import { AppContext } from './appContext'

const App: FC = () => {
  const [reports, setReports] = useState<any>()

  return (
    <AppContext.Provider value={{ reports, setReports }}>
      {reports ? <Reports /> : <Login />}
      <StatusBar style='auto' />
    </AppContext.Provider>
  )
}

export default App
