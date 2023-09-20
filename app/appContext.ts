import { createContext } from 'react'

export interface Report {
  week_id: number
  weight?: number
  physact_minutes?: number
  strength_minutes?: number
  aerobic_minutes?: number
  avgsteps?: number
  notes?: string
}

interface AppContextInterface {
  reports?: Report[]
  setReports: (reports: Report[]) => void
}

export const AppContext = createContext<AppContextInterface>({ setReports: () => {} })
