import express, {Application} from "express";
import userRoutes from "../routes/userRoutes.js";


export default (app: Application)  =>{
    app.use(
        express.json(),
        userRoutes
    )
}