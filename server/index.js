import express from "express"
// import bodyParser from "body-parser"
import urlRoutes from './routes/url.js'
import connectToMongoDb from "./db-connect.js"
import dotenv from 'dotenv';
import URL from "./models/url.js";
import handleRedirect from "./controllers/redirect.js";

dotenv.config();

const app = express()

connectToMongoDb().then(()=>{
    console.log("database connected");
})

app.use(express.json())

app.use('/url', urlRoutes)

app.get('/:shortId', handleRedirect)



app.listen(process.env.PORT, ()=> console.log("server listening"))