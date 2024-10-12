import express from "express";
import userController from "../controllers/userController.js";

const Router = express.Router();

//route to create an user
Router.post("/", userController.create);


export default Router;