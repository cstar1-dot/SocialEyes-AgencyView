import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

export default function App() {
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="min-h-screen bg-slate-950">
      <Header timeRange={timeRange} onTimeRangeChange={setTimeRange} />
      <Dashboard timeRange={timeRange} />
    </div>
  )
}
