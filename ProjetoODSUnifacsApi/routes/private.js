import express from 'express';

const router = express.Router();

router.get('/Queimadas', async (req, res) => {

    try {
        res.render('queimadas'); // Renderiza a view 'queimadas'
        res.status(200)
    } catch (e) {
        res.status(500).json({ error: e.message });
    }

});


export default router;

