import {Router} from 'express';
import {configGET} from '../middleware/limit.js';

const appCampus = Router();

appCampus.get("/",configGET(),(req,res)=>{
    console.log(req.rateLimit);
    res.send("ajdnkas")
});

export default appCampus;