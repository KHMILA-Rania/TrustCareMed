import { type Request, type Response } from "express";
import DataSource from "../db/data-source";
import { RendezVous } from "../entity/Rendezvous";




const RendezVousRepository=DataSource.getRepository(RendezVous);

//create new doctoraccount




export async function createRendezvous (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
  const {patientName,doctor,appointmentDate,appointmentTime} = req.body;
  
   try{

    const rendez_vous=RendezVousRepository.create({patientName,doctor,appointmentDate,appointmentTime});
    

    await RendezVousRepository.save(rendez_vous);

    return res.json({doctor, msg: "Created game successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "something went wrong !", status: 500, route: "/create" });
  }
}










//view doctors
export async function getRendezvous(req: Request, res: Response):Promise<Response<any, Record<string, any>> | undefined>{

    try{
        const rendez_vous=await RendezVousRepository.find();
        return res.json(rendez_vous);
    }
    catch(err) {
        console.error("error occured while retrieving doctors");
        return res.status(500).json({ error: "something went wrong !" });
    }
}

//find doctor by id 
export async function findRendezvous (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
  const id = req.params.id as unknown as number;
  try {
    const rendez_vous = await RendezVousRepository.findOneBy({ id });

    return res.json(rendez_vous);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "something went wrong !" });
  }
};

//update Doctor
export async function updateRendezvous (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    const { patientName,doctor,appointmentDate,appointmentTime } = req.body;
  
    try {
      let rendez_vous = await RendezVousRepository.findOneBy({ id });
  
      if (rendez_vous == null) {
        return res.json();
      }
  
      rendez_vous.patientName = patientName;
      rendez_vous.doctor = doctor;
      rendez_vous.appointmentDate= appointmentDate;
      rendez_vous.appointmentTime= appointmentTime;
      
  
     rendez_vous= await RendezVousRepository.save(rendez_vous);
  
      return res.json(rendez_vous);
    } catch (err) {
      console.error(err);
      return res.json(err);
    }
  };

  // Delete Doctor
export async function deleteRendezvous (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
    const id = req.params.id as unknown as number;
    try {
      const rendez_vous = await RendezVousRepository.findOneBy({ id });
  
      if (rendez_vous != null) {
        await RendezVousRepository.remove(rendez_vous);
      }
  
      return res.json({ message: "doctor deleted successfully!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "something went wrong !" });
    }
}
