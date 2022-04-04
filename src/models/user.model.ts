import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export interface UserDocument extends mongoose.Document{
    email: string,
    name: string,
    password: string
    createdAt: Date
    updatedAt: Date
    comparePassword(candidatePassword: string): Promise<Boolean>
}


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true}
)


UserSchema.pre("save", async function(next) {
    let user = this as UserDocument

    if (!user.isModified("password")){
        return next()
    }

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hashSync(user.password, salt)

    user.password = hash

    return next();
})


UserSchema.methods.comparePassword = async function(candidatePassword:string): Promise<boolean> {
    const user = this as UserDocument
    try{
        return bcrypt.compare(candidatePassword, user.password)
    }
    catch(e){
        return false
    }

    
}

const UserModel = mongoose.model("User", UserSchema)

export default UserModel