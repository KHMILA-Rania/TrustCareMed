import { type Request, type Response } from "express";


import AppDataSource from "../db/data-source"; 'src/bd/data-source.ts';
import { QueryResult } from "pg";
import { Test } from "../models/test";


//const testRepo=DataSource.getRepository
//create 
export const createTest=async(id:number):Promise<Test>=>{
    try{
        console.log('Query:', 'insert into test(id) values($1) returning *');
        console.log('Parameters:', [id]);
    const result: QueryResult = await AppDataSource.query('insert into test(id) values($1) returning *',[
        id
    ]);
    if(result && result.rows && result.rows.length > 0 ){
    return result.rows[0];}
    else {
        throw new Error("no rows returned after insertion ");
    } }catch (error) {
        console.error(error);
        throw new Error('Error during test creation');
      }
};

