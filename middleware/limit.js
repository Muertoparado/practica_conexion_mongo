import {rateLimit} from 'express-rate-limit';

export let configGET= () =>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true,
        legalcyHeaders: false,
        message:{
            status:429,
            message:"ya se acabo tiempo :("
        }
    });
}