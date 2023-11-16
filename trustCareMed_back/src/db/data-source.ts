import "reflect-metadata"
import { DataSource } from "typeorm"
import  Doctor  from "../entity/Doctor"
import Patient from "../entity/Patient";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "mydb",
    synchronize: true,
    logging: true,
    entities: [Doctor,Patient],
    migrations: [],
    subscribers: [],
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => { console.log(error); });


  export default AppDataSource;
