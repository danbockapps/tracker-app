import { StatusBar } from 'expo-status-bar'
import { FC, useState } from 'react'
import Login from './app/Login'
import Reports from './app/Reports'
import { AppContext, Report } from './app/appContext'

const App: FC = () => {
  const [reports, setReports] = useState<Report[]>()

  return (
    <AppContext.Provider value={{ reports, setReports }}>
      {reports ? <Reports /> : <Login />}
      <StatusBar style='auto' />
    </AppContext.Provider>
  )
}

export default App
