import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import databaseConnection from './connection/connection.js';
import stockRoute from "./routes/stockRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const PORT = process.env.PORT || 3000;

app.use(stockRoute);
app.use("/api/v1/auth", authRoute);

const startServer = async () =>{

try {
    databaseConnection(process.env.MONGODB_URI);
    app.listen(PORT, () =>{
        console.log(`server is successfully running on PORT ${PORT}`)
    });

} catch (error) {
    console.log(error || "Error In Starting Server");
}

}

startServer();

