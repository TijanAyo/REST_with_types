require('dotenv').config()

export default {
    port: 4030,
    dbURI: `mongodb+srv://Tijan:${process.env.DB_PASS}@getting-started-with-no.sdrkl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
};