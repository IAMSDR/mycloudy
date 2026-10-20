import { app } from './src/app'

const port = Number(process.env.PORT ?? 6970)

export default {
  port,
  fetch: app.fetch,
}
