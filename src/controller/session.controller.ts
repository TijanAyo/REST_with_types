import {Request, Response} from 'express'
import { createSession } from '../service/session.service'
import { validatePassword } from '../service/user.service'
import { signJwt } from '../utils/jwt.utils'
import config from 'config'


export const sessionHandler = async (req: Request, res: Response) =>{

    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401).send("Invalid email or password")
    }
    // create a session
    const session = await createSession(user._id)

    // create an AcessToken
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get('accessTokenTtl')}
    )

    //create a refresh token
    const refreshToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get('accessTokenTtl')}
    )

    // return access and refresh token

    return res.send({accessToken, refreshToken})
}