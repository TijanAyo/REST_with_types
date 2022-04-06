import {Response, Request} from 'express'
import { CreateUserInput } from '../schema/user.schema'
import {createUser} from '../service/user.service'


export const createUserHandler = async (req: Request<{},{}, CreateUserInput['body']>, res: Response) =>{
    try{
        const user = await createUser(req.body)
        return res.status(201).json({
            status: "Created",
            user
        })
    }
    catch(err){
       console.log(err)
       return res.status(409) 
    }
}

// async (req: Request<{},{}, CreateUserInput['body']>, res: Response) =>{
    
// (req: Request, res:Response)