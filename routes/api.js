import express from 'express';
import * as taskController from '../app/controllers/taskController.js';
let router = express.Router();

// show Hello world

router.get('/first',taskController.first);


// generate token 

router.get('/TokenEncode', taskController.TokenEncode);

// show I am post body in response

router.post('/third', taskController.third);

export default router;