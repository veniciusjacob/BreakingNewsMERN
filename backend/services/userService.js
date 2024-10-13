import userModel from "../model/userModel.js";


//Receive the user data from the controller
const create = (body) => userModel.create(body);



export default {create};