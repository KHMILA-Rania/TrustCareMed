import { type Request, type Response } from "express";
import Patient from "../entity/Patient";
import DataSource from "../db/data-source";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import ResponseModels from "../entity/ResponseModels";
import  getRepository  from 'typeorm';
import Doctor from "../entity/Doctor";

const doctorRepository =DataSource.getRepository(Doctor);
const patientRepository=DataSource.getRepository(Patient);

//create
export async function createPatient (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const { name, adress, email, password, role, phone, cin, dateOfBirth} = req.body;
    
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds, you can adjust it based on your needs
  

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds, you can adjust it based on your needs
  

      
      const patient = patientRepository.create({ name, adress, email, password :hashedPassword, role, phone, cin, dateOfBirth });
  
      await patientRepository.save(patient);
  
      return res.json({ patient, msg: "Created game successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "something went wrong !", status: 500, route: "/create" });
    }
  }

  

  const secretKey = 'raef';

export function generateAuthToken(patient: Patient): string {
    const token = jwt.sign({ patientId: patient.id, email: patient.email }, secretKey, { expiresIn: '1h' });
    return token;
}

//login

export async function login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
  const { email, password,role } = req.body;
  
  try {
    let user;
   
    const doctor = await doctorRepository.findOne({ where: {email } });
if(role === 'patient'){
  user=await patientRepository.findOne({ where: {email} });
 } else if(role === 'doctor'){
  user=await doctorRepository.findOne({ where: {email} });}
  
  
  if (! user ) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    console.log("test pass1111");
    const isPasswordValid = await bcrypt.compare(password, user.password);
 

    if (!isPasswordValid) {
      console.log("test pass");
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    return res.status(200).json({ message: 'Login successful', user});
  
    
      
    

    // You can also store user information in the session here if necessary

    
}catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

  

  // Update patient
export async function updatePatient (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    const { name, adress, email, password, role, phone, cin, dateOfBirth } = req.body;
  
    try {
      let patient = await patientRepository.findOneBy({ id });
  
      if (patient == null) {
        return res.json();
      }
  
      patient.name = name;
      patient.adress = adress;
      patient.email = email;
      patient.password = password;
      patient.phone = phone;
      patient.cin = cin;
      patient.dateOfBirth = dateOfBirth;
      

  
      patient = await patientRepository.save(patient);
  
      return res.json(patient);
    } catch (err) {
      console.error(err);
      return res.json(err);
    }
  };
  
  // Delete Patient
export async function deletePatient (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    try {
      const patient = await patientRepository.findOneBy({ id });
  
      if (patient != null) {
        await patientRepository.remove(patient);
      }
  
      return res.json({ message: "patient deleted successfully!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "something went wrong !" });
    }
  };
