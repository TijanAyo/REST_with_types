import {DocumentDefinition} from "mongoose"
import UserModel, { UserDocument } from "../models/user.model";


export const createUser = async (input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>) =>{
    try{
        const user = await UserModel.create(input)
        return user
    }
    catch(err: any){
        throw new Error(err)
    }
}

// (input: DocumentDefination<UserDocument>)
// (input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>)

export const validatePassword = async ({email, password}: {email: string, password: string}) => {
    const user = await UserModel.findOne({email})

    if(!user){
        return false;
    }
    const isValid = await user.comparePassword(password)

    if(!isValid){
        return false
    }
    return user 
}

//  const user = await UserModel.findOne({email})

//  if(!user){
//      return false
//  }
//  else{
//      const isValid = await user.comparePassword(password)

//      if(!isvalid){
//           return false
//      }
//      return user
//  }