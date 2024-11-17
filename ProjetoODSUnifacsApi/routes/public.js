import express from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import jwt  from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET

//Rota de cadastro de usuário usando o método POST e hash de senha com bcrypt
//Cadastro usando Email, Nome e Senha

router.post('/cadastro', async (req, res) => {


    try{
    const user = req.body

    // Verifica se já existe um usuário com o mesmo email
    const jaTemEmail  = await prisma.user.findUnique({
        where:{
            email: user.email,
        }
    })

    if (jaTemEmail) {
        return res.status(400).json({ error: 'O email já está cadastrado.' });
    }

    // Valida se senha deve tem pelomenos 5 caracteres
    if (!user.senha || user.senha.length < 5) {
         return res.status(400).json({ error: 'A senha deve ter pelo menos 5 caracteres.' });
    }

    // Validação: nome não pode ser nulo ou vazio
    if (!user.name || user.name.trim() === '') {
        return res.status(400).json({ error: 'O nome é obrigatório.' });
    }

    // cria um hash da senha do usuário
    const salt = await bcrypt.genSalt(10);
    const hashSenha = await bcrypt.hash(user.senha, salt);


    //salva o usuário no banco de dados
    const newUser = await prisma.user.create({
        data:{
            name: user.name,
            email: user.email,
            senha: hashSenha,
        },
    })

    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '3h' })

    return res.json({ token })

    }catch(e){
        
        res.status(500).json({error: e.message})

    }

});

//Rota de login de usuário usando o método POST
//Login usando Email e Senha

router.post('/login', async (req, res) => {
    
        try{
        const user = req.body

        //faz a busca do usuário no banco de dados
        const userDb = await prisma.user.findUnique({
            where:{
                email: user.email,
            }
        })
    
        //verifica se o usuário existe
        if(!userDb){
            return res.status(404).json({error: 'Usuário não encontrado'})
        }

        //compara a senha digitada com a senha do banco de dados
    
        const comparador = await bcrypt.compare(user.senha, userDb.senha);
    
        if(!comparador){
            return res.status(401).json({error: 'Senha incorreta'})
        }
    
        //cria um token de autenticação

        const token = jwt.sign({id: userDb.id}, JWT_SECRET, {expiresIn: '3h'})

        //retorna uma mensagem de sucesso
        res.status(200).json(token)
    
        }catch(e){
            
            res.status(500).json({error: e.message})
    
        }
    
    })

export default router;