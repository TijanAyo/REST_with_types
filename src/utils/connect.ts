import mongoose from "mongoose"
import config from "config"


const Connect = async () =>{
    const dbURI = config.get<string>('dbURI')
    try{
        await mongoose.connect(dbURI)
        console.log('DB connected')
    }
    catch(err){
        console.log(err) 
        process.exit(1)
    }
}

export default Connect