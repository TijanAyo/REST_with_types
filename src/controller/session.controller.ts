import {Request, Response} from 'express'
import { createSession } from '../service/session.service'
import { validatePassword } from '../service/user.service'
import { signJwt } from '../utils/jwt.utils'
import config from 'config'


export const sessionHandler = async (req: Request, res: Response) =>{

    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401).json("Invalid email or password")
    }
    // create a session
    const session = await createSession(user._id)

    // create an AcessToken
    const accessToken = signJwt({ 
        ...user, session: session._id}, 
        {expiresIn: config.get('accessTokenTtl')}
    )
    // create refreshToken
    const refreshToken = signJwt({ 
        ...user, session: session._id}, 
        {expiresIn: config.get('refreshTokenTtl')}
    )
    
    return res.json({accessToken, refreshToken})
}

export const getUserSessionHandler = async (req: Request, res: Response) =>{
    
}