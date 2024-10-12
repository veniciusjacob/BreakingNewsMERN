import express from "express";
import dotenv from "dotenv"
import Router from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use('/user', Router);

app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
});