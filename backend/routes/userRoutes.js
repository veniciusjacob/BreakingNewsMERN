import express from "express";
import userController from "../controllers/userController.js";

const Router = express.Router();

Router.post("/", userController.create);


export default Router;