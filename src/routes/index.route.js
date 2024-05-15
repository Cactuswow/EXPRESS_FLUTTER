import { Router } from 'express'
import { routerMenu } from './menu.route.js'
import { routerBebida } from './bebida.route.js'

export const routerGeneral = Router()
routerGeneral.use(routerMenu)
routerGeneral.use(routerBebida)
