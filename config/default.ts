require('dotenv').config()

export default {
    port: 4030,
    dbURI: `mongodb+srv://Tijan:${process.env.DB_PASS}@getting-started-with-no.sdrkl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    PublicKey:`-----BEGIN PUBLIC KEY-----
680ca2c8caee812372cb4859ae05bb47
-----END PUBLIC KEY-----
    `,
    PrivateKey: `-----BEGIN RSA PRIVATE KEY-----
${process.env.PrivateKey} 
-----END RSA PRIVATE KEY-----`,
    accessTokenTtl: '15m',      // access token time to live
    refreshTokenTtl: '1y',      // refresh token time to live
};