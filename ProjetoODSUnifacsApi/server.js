import express from 'express'
import publicRouter from './routes/public.js'
import privateRouter from './routes/private.js'
import cors from 'cors'
import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())

app.use(cors())

app.use('/', publicRouter)
app.use('/', auth, privateRouter)



app.listen(3000, () => {
    console.log('Server online em http://localhost:3000');
});