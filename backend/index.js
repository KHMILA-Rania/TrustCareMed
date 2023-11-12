const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// CREATE PATIENT
app.post("/patient", async (req, res) => {
    try {
        const { name, email, phone, cin_passport, address, dateOfBirth, sex, password } = req.body;

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10); // Adjust the salt rounds as needed

        const newPatient = await pool.query(
            "INSERT INTO patient (name, email, phone, cin_passport, address, date_of_birth, sex, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [name, email, phone, cin_passport, address, dateOfBirth, sex, hashedPassword]
        );

        res.status(200).json(newPatient.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Send a JSON response with a more meaningful error message
    }
});

//login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM patient WHERE email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Vous pouvez également stocker les informations de l'utilisateur dans la session ici si nécessaire

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/testt", async (req, res) => {
    res.status(200).send('OK');
});

const PORT = 4201;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
