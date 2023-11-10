CREATE DATABASE backend ;


  CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    cin_passport VARCHAR(50) NOT NULL,
    address VARCHAR(255),
    date_of_birth DATE,
    sex VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


