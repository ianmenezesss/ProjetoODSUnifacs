import express from 'express'
import publicRouter from './routes/public.js'
import cors from 'cors'

// Configufuração do CORS para permitir que a API seja acessada apenas pelo meu site
const corsOptions = {
    origin: 'https://biosphereods.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  };

const app = express()
app.use(express.json())

// Habilita o CORS
app.use(cors())

app.use(cors(corsOptions));

// Rotas principais de cadastro e login
app.use('/', publicRouter)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server online em http://localhost:3000');
});