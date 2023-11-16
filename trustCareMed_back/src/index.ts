
import dotenv from "dotenv";
dotenv.config();
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

import  { Request, Response } from 'express';
import "./db/data-source";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { createPatient, deletePatient, login, updatePatient } from "./services/PatientService";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port=3000;
app.use(express.json())


//security config 
app.use((req: any, res: any, next: any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,Accept,Content-Type,X-Requested-with,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
    next();
  });

// patient crude
  app.post('/createPatient',createPatient);
  app.post('/login',login);
  app.put('/updatePatient',updatePatient);
  app.post('/deletePatient' ,deletePatient);



  // postman connect

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


  
  