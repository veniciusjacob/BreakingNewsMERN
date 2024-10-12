import express from "express";
import dotenv from "dotenv"
import Router from "./routes/userRoutes.js";
import conn from "./database/databaseConection.js"



dotenv.config();
const app = express();
const PORT = process.env.PORT;

// express can read json files
app.use(express.json())

// will be used to acess the routers
app.use('/user', Router);


app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
});

//connection to the database
conn();