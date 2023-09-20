import { createContext } from 'react'

interface Report {
  week_id: number
  weight: number
  physact_minutes: number
  avgsteps: number
  notes: string
}

interface AppContextInterface {
  reports?: Report[]
  setReports: (x: any) => void
}

export const AppContext = createContext<AppContextInterface>({ setReports: () => {} })
