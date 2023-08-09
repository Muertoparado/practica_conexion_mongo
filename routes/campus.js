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

appCampus.post('/insert', function (req, res) {
    ObjectId.connect(con(), function(err, db) {
      if (err) {
        console.log("Error de conexión:", err);
        res.status(500).send("Error de conexión a la base de datos");
        return;
      }
      var dbo = db.db("practica1");
      var myobj = req.body;
      dbo.collection("usuario").insertOne(myobj)
      .then(result => {
        console.log("Documento insertado");
        res.send({ status: "success", message: "Documento insertado", document: result.ops[0] });
        db.close();
      })
      .catch(error => {
        console.log("Error al insertar documento:", error);
        res.status(500).send("Error al insertar documento");
      });
    });
  });
export default appCampus;