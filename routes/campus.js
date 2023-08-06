import { ObjectId } from 'mongodb';
import { con }  from '../db/atlas.js';
import { limitGrt } from '../limit/config.js';
import {Router} from 'express';
const appCampus= Router();

appCampus.get("/", limitGrt(),async(req, res)=>{
    if(!req.rateLimit) return;
    res.send("enviado");
    console.log(req.rateLimit);
});

export default appCampus;