const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


// Middleware
app.use(cors());
app.use(express.json());

// Routes

// CREATE PATIENT
app.post("/patient", async (req, res) => {
    try {
        const { name, email, phone, cin_passport, address, dateOfBirth, sex } = req.body;

        // Assuming you have a patients table with columns: name, email, phone, cin, address, date_of_birth, sex
        const newPatient = await pool.query(
            "INSERT INTO patient (name, email, phone, cin_passport, address, date_of_birth, sex) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [name, email, phone, cin_passport, address, dateOfBirth, sex]
        );

        res.status(200).json(newPatient.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/testt", async (req, res) => {
    res.status(200).send('OK');
});

const PORT = 4201 ;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
