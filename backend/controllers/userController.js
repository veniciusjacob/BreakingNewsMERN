import userService from "../services/userService.js";

const create = async (req, res) => {
    const { name, username, email, password, avatar, background  } = req.body;

    if(!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message: 'Submite all fields for registration!'});
    }

    //Send the user Data to userService
    const userData = await userService.create(req.body);

    if(!userData){
        return res.status(400).send({message: 'Error creating user'});
    }

    res.status(201).send({
        message: 'User created successfully',
        user:{
            id: userData._id,        
            name,
            username,
            email,
            avatar,
            background
        }        
    }); 
}

export default {create};