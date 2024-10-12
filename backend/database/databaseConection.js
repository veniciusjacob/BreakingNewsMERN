import mongoose from 'mongoose';


const conn = async () => {
    console.log("waiting for the connection to the database...")
    try {
        await mongoose.connect(process.env.conectionString);
        console.log("Database connected succesfuly!");
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`)
    }
    
}

export default conn;





