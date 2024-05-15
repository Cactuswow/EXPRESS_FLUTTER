import express from 'express'
import { routerGeneral } from './routes/index.route.js'
const app = express()
app.use(express.json())
app.use(routerGeneral)

app.put('/pedidos/:id', (req, res) => {
   res.json({
      data: req.body,
      param: req.params.id,
      query: req.query.id ?? 'Waos',
   })
})

app.get(
   '/params',
   (req, res, nextToEmpanada) => {
      console.log({ pringao: 'jijijjj' })
      nextToEmpanada()
   },
   (req, res) => {
      res.json(req.query)
   }
)

app.get('/params/:comida/:bebida', (req, res) => {
   res.json(req.params)
})

app.post('/params', (req, res) => {
   res.json(req.body)
})

app.use('*', (_, res) => {
   res.json({ hola: 'PERDIO' })
})

app.listen(3000, () => {
   console.log('http://localhost:3000')
})
