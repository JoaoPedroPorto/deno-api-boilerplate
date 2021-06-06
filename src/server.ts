import { Application } from 'https://deno.land/x/oak/mod.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'

import router from './routes/routes.ts'

const app = new Application()

app.use(oakCors())
app.use(router.routes())
app.use(router.allowedMethods())

export default app
