
const path=require('path');
require('dotenv').config({
    override:true,
    path:path.join(__dirname,'dev.env')
});

const {Pool,Client} =require('pg');

const pool=new Pool({
    user:process.env.user,
    host:process.env.host,
    database:process.env.database,
    password:process.env.password,
    port:process.env.port
});

(async()=>{
    const client=await pool.connect();
    try{
   
    const {rows}=await client.query('select current_user');
    const currUser=rows[0]['current_user']
    console.log(currUser);}
    catch (err){
        console.error(err);
    }
    finally{
        client.release();
    }
})();