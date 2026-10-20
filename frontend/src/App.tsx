import { useEffect, useState } from 'react'
import { Button } from 'react-material-expressive'

type Health = {
  status: string
  uptime: number
}

export default function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        return response.json() as Promise<Health>
      })
      .then(setHealth)
      .catch((cause: unknown) =>
        setError(cause instanceof Error ? cause.message : 'request failed'),
      )
  }, [])

  return (
    <main className="app">
      <h1>MyCloudy</h1>
      <p>
        Backend status:{' '}
        <strong>{error ?? health?.status ?? 'checking…'}</strong>
      </p>
      {health ? <p>Uptime: {health.uptime.toFixed(0)}s</p> : null}
      <Button>Hello Material</Button>
    </main>
  )
}
