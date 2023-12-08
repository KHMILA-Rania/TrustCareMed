import { type Request, type Response } from "express";
import Doctor from "../entity/Doctor";
import DataSource from "../db/data-source";

const doctorRepository=DataSource.getRepository(Doctor);

//create new doctoraccount
export async function createDoctor(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>{

  console.log("starting");
    const {name,adress,password,email,phone,speciality,matricule,cin,dateOfBirth,role} = req.body;
     
    try {
      console.log("try black");
        const doctor=doctorRepository.create({name,adress,password,email,phone,speciality,matricule,cin,dateOfBirth,role});
        await doctorRepository.save(doctor);
        return res.json({doctor,msg:"success"});
    }
catch(err) {
console.error(err);
return res.status(500).json({ error: "something went wrong !", status: 500, route: "/create" });
}
}


//view doctors
export async function getDoctors(req: Request, res: Response):Promise<Response<any, Record<string, any>> | undefined>{

    try{
        const doctors=await doctorRepository.find();
        return res.json(doctors);
    }
    catch(err) {
        console.error("error occured while retrieving doctors");
        return res.status(500).json({ error: "something went wrong !" });
    }
}

//find doctor by id 
export async function findDoctor (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
  const id = req.params.id as unknown as number;
  try {
    const doctor = await doctorRepository.findOneBy({ id });

    return res.json(doctor);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "something went wrong !" });
  }
};

//update Doctor
export async function updateDoctor (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    const { name,adress,password,email,phone,speciality,matricule,cin,dateOfBirth,role } = req.body;
  
    try {
      let doctor = await doctorRepository.findOneBy({ id });
  
      if (doctor == null) {
        return res.json();
      }
  
      doctor.name = name;
      doctor.password = password;
      doctor.role= role;
      doctor.adress= adress;
      doctor.dateOfBirth= dateOfBirth;
      doctor.cin=cin;
      doctor.email= email;
      doctor.matricule= matricule;
      doctor.phone= phone;
      doctor.speciality= speciality;
  
     doctor= await doctorRepository.save(doctor);
  
      return res.json(doctor);
    } catch (err) {
      console.error(err);
      return res.json(err);
    }
  };

  // Delete Doctor
export async function deleteDoctor (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    try {
      const doctor = await doctorRepository.findOneBy({ id });
  
      if (doctor != null) {
        await doctorRepository.remove(doctor);
      }
  
      return res.json({ message: "doctor deleted successfully!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "something went wrong !" });
    }
};
  
