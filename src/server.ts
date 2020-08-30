import express from 'express'
import http from 'http'
import { applyMiddleware, applyRoutes } from './utils'
import middleware from './middleware'
import routes from './services'
console.log(middleware)

const router: express.Application = express()
applyMiddleware(middleware, router)
applyRoutes(routes, router)

const { PORT = 3000 } = process.env
const server = http.createServer(router)

server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`))
