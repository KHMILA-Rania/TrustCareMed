
import dotenv from "dotenv";
dotenv.config();

import  { Request, Response } from 'express';
import "./db/data-source";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as testService from "./services/test";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port=3000;
app.use(express.json());

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

app.post('/api/test',async(req: Request, res: Response) =>{
    try{
        const {id}=req.body;
        const newTest=await testService.createTest(id);
        res.json(newTest);
    } catch(err){
        console.error(err);
        res.status(500).json({error:'internal server error'});
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });