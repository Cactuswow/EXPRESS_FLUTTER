import { Router } from 'express'

export const routerMenu = Router()
routerMenu.get('/menu', (req, res) => {
   res.json({ msg: 'Empanadita' })
})

routerMenu.get('/menu', (req, res) => {
   res.json({ msg: 'POST Empanadita' })
})
