import express from "express";
import { dftrmahasiswa } from "./model.js";
const app = express();

app.get('/dftrmahasiswa/:mhs', (req, res) => {
    const parameter = req.params.mhs;
    res.send(dftrmahasiswa(parameter));
});

app.listen(3001, ()=> console.log('server hidup'));
