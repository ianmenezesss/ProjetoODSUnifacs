import express from 'express'
import publicRouter from './routes/public.js'
import cors from 'cors'

const corsOptions = {
    origin: 'https://biosphereods.vercel.app', // Allow only your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  };

const app = express()
app.use(express.json())

// Habilita o CORS que permite que a API seja acessada por qualquer domínio
app.use(cors())

app.use(cors(corsOptions));

// Rotas principais de cadastro e login
app.use('/', publicRouter)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server online em http://localhost:3000');
});