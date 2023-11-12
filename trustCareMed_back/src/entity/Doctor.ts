

import  {Entity , PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity({name:"doctor"})
class  Doctor  {
    
 @PrimaryGeneratedColumn()
   id!:number
    
   @Column()
    name:string
    @Column()
    adress:string
    @Column()
    email:string
   
    
   
    @Column()
    phone:number

    @Column()
    speciality :string
   
    @Column()
    matricule:string

    @Column()
   cin:string
  
   @Column()
   dateOfBirth:string
    
}
export default Doctor;