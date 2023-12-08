
import dotenv from "dotenv";
dotenv.config();
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

import  { Request, Response } from 'express';
import "./db/data-source";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { createPatient, deletePatient, login, updatePatient } from "./services/PatientService";
import { createDoctor, deleteDoctor, findDoctor, getDoctors, updateDoctor } from "./services/doctorService";
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port=3000;
app.use(express.json())



app.use(cors({
  origin: 'http://localhost:4200', // Mettez ici l'URL de votre frontend
  credentials: true,
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

//security config 
//app.use((req: any, res: any, next: any) => {
  //  res.setHeader("Access-Control-Allow-Origin", "*");
    //res.setHeader(
    //  "Access-Control-Allow-Headers",
    //  "Origin,Accept,Content-Type,X-Requested-with,Authorization"
    //);
    //res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
    //next();
  //});

// patient crude
  app.post('/createPatient',createPatient);
  app.post('/login',login);
  app.put('/updatePatient',updatePatient);
  app.delete('/deletePatient' ,deletePatient);



//doctor crud
app.post('/createDoctor',createDoctor);
app.get('/getDoctors',getDoctors);
app.get('/findDoctor/:id',findDoctor);
app.post('/updateDoctor',updateDoctor);
app.delete('/deleteDoctor',deleteDoctor);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



  