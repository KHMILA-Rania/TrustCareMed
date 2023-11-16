const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    password: "frinky",
    host: "localhost",
    port: 1800,
    database: "backend"


});

module.exports = pool;