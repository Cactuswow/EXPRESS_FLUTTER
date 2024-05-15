import { Router } from 'express'

export const routerBebida = Router()

routerBebida.get('/bebida', (req, res) => {
   res.json({ msg: 'Cocacolastic' })
})

routerBebida.get('/bebida', (req, res) => {
   res.json({ msg: 'POST Cocacolastic' })
})
