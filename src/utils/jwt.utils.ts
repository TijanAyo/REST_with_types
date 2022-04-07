import jwt from 'jsonwebtoken'
import config from 'config'

const PrivateKey = config.get<string>('PrivateKey')
const PublicKey = config.get<string>('PublicKey')

export function signJwt(object: Object, options?: jwt.SignOptions | undefined){
    jwt.sign(object, PrivateKey, { ...(options && options), algorithm: "RS256"})
}

export function verifyJwt(token: string){
    try{
        const decoded = jwt.verify(token, PublicKey)
        return {
            valid: true,
            expired: false,
            decoded
        }
    }
    catch(err: any){
       return {
           valid: false,
           expired: err.message === ' jwt expired',
           decoded: null
        } 
    }
}

// optional?: jwt.SignOptions | undefined