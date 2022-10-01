import { Router } from 'express';

const router = Router();


router.get('/', (req,res) => {
    return res.send('teste!');
});

router.post('/', (req,res) => {

    return res.json(req.body);
});



export {router};