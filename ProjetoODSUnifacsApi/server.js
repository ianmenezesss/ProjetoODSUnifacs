import express from 'express'
import publicRouter from './routes/public.js'
import cors from 'cors'

const app = express()
app.use(express.json())

// Habilita o CORS que permite que a API seja acessada por qualquer domínio
app.use(cors())
app.use(cors({ origin: 'https://biosphereods.vercel.app/' }));

// Rotas principais de cadastro e login
app.use('/', publicRouter)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server online em http://localhost:3000');
});