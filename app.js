/* import {con} from './db/atlas.js';
import {Collection} from 'mongodb';

let db = await con();

const collections=await db.listCollections().toArray();
console.log(collections);

const bandera= collections.some((collections)=>collection.name ==='user');
console.log(bandera);
 */

import dotenv from 'dotenv';
import express from 'express';
import appCampus from './routes/campus.js';

dotenv.config();
const app=express();
app.use("/campus",appCampus)


const config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})