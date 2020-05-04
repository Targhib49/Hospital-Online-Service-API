// External library
const express = require("express");
const cors = require("cors");
const expressJWT = require("express-jwt");

// Consts and vars
const app = express();

// Enable external library
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

// Routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "This is the Hospital Online Service API - Copyright by Targhib Ibrahim"})
});

// - Users Routes
app.get("/users", (req, res) => {
    res.status(200).json({ 
        message: "User list available : admins(primary security), doctors(secondary security), patients(secondary security)"})
});
// app.use("/users/admins", require("./routes/admins"));
// app.use("/users/doctors", require("./routes/doctors"));
// app.use("/users/patients", require("./routes/patients"));

// - Appointments Routes
app.get("/appointments", (req, res) => {
    res.status(200).json({ message: "Access the appointment data by entering the month as query(secondary security)"})
});

// - Medical Record (Records) Routes
app.get("/records", (req, res) => {
    res.status(200).json({ message: "Access the record data by entering field as query(primary security"})
});

// Listen
app.listen(3001, () => {
    console.log("Listening to port 3001");
})