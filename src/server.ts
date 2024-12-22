import express  from "express";
import {Request, Response} from "express";


const app = express();


app.get("/",  (req: Request, res: Response) => {
    res.send("ok");
})



app.listen(3333, () =>{
    console.log("Running in http://127.0.0.1:3333");
})
