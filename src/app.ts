import { existsSync } from 'node:fs'
import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { health } from './routes/health'

export const app = new Hono()

app.route('/api/health', health)

const distDir = './frontend/dist'

if (existsSync(`${distDir}/index.html`)) {
  app.use('/assets/*', serveStatic({ root: distDir }))
  app.use('/*', serveStatic({ root: distDir }))
  app.get('*', serveStatic({ path: `${distDir}/index.html` }))
}
