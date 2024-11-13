import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    const token = req.headers.authorization;

    // Verifica se o token existe
    if (!token) {
        return res.status(401).send({ message: 'Acesso negado' });
    }

    // Verifica se o token é válido
    try {
        const data = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
        
        req.Id = data.id;

        next();

    // Se o token não for válido, retorna um erro
    } catch (e) {
        res.status(401).send({ message: 'Erro no token' });
    }
};

export default auth;