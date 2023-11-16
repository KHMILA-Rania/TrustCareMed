import { type Request, type Response } from "express";
import Patient from "../entity/Patient";
import DataSource from "../db/data-source";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import ResponseModels from "../entity/ResponseModels";

const patientRepository=DataSource.getRepository(Patient);

//create
export async function createPatient (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const { name, adress, email, password, role, phone, cin, dateOfBirth} = req.body;
  
    try {
      const patient = patientRepository.create({ name, adress, email, password, role, phone, cin, dateOfBirth });
  
      await patientRepository.save(patient);
  
      return res.json({ patient, msg: "Created game successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "something went wrong !", status: 500, route: "/create" });
    }
  };

  

  const secretKey = 'raef';

export function generateAuthToken(patient: Patient): string {
    const token = jwt.sign({ patientId: patient.id, email: patient.email }, secretKey, { expiresIn: '1h' });
    return token;
}

//logiin

export async function loginPatient(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    try {
        const { email, password } = req.body;

        const patient = await patientRepository.findOne({  where: { email } });

        if (!patient) {
            console.log("invalid");
            return res.status(401).json({ error: 'Invalid credentials' });
           
        }

        const isPasswordValid = await bcrypt.compare(password, patient.password);

        if (!isPasswordValid) {
            console.log("invalid");
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // You can generate a new token or session here if needed
       const token = generateAuthToken(patient); // You need to implement this function

       console.log("success");
        return res.status(200).json({ patient, message: 'Login successful' });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
//login2

export async function login (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const { email, password } = req.body;
 
   
    try {
        
        console.log("try block");
      const patient = await patientRepository.findOne({ where: { email } });
  
      if (patient == null) {

        console.log("if block");
        return res
          .status(ResponseModels.NOT_FOUND.status)
          .json({ message: ResponseModels.NOT_FOUND.message });
      }
  
      const passwordMatch = await bcrypt.compare(password, patient.password);
  
      if (!passwordMatch) {
        console.log("test pass ");
        return res
          .status(ResponseModels.UNAUTHORIZED.status)
          .json({ message: ResponseModels.UNAUTHORIZED.message });
      }
  
      const token = jwt.sign(
        { userId: patient.id },
        process.env.TOKEN_SECRET as string
      );
  
      return res
        .status(ResponseModels.SUCCESS.status)
        .json({ message: ResponseModels.SUCCESS.message, token });
    } catch (error) {
      console.error("Error occurred during user login", error);
      return res.status(500).json({
        message: "An error occurred during user login"
      });
    }
  }

  //update

  // Update game
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
  
  // Delete game
export async function deletePatient (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    try {
      const patient = await patientRepository.findOneBy({ id });
  
      if (patient != null) {
        await patientRepository.remove(patient);
      }
  
      return res.json({ message: "game deleted successfully!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "something went wrong !" });
    }
  };
