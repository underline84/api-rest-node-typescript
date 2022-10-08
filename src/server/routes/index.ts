import { Router } from 'express';
import { CidadesController } from '../controllers';


const router = Router();


router.get('/', (req,res) => {
    return res.send('<html><head></head><body><h2>API de desenvolvimento<h2><body></html>');
});

router.get('/cidades', CidadesController.create);
router.post('/cidades', CidadesController.create);


router.post('/', (req,res) => {

    return res.json(req.body);
});



export {router};