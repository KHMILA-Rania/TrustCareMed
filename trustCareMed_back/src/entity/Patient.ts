import  {Entity , PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity({name:"patient"})
class  Patient  {
    
 @PrimaryGeneratedColumn()
   id!:number
    
   @Column()
    name:string
    @Column()
    adress:string
    @Column()
    email!:string

    @Column()
    password!:string
   
    @Column()
    role:string
   
    @Column()
    phone:number

   

    @Column()
   cin:string
  
   @Column()
   dateOfBirth:string
    
}
export default Patient;