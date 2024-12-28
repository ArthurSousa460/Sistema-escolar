import express from "express";
import {Request, Response} from "express";
import UserController from "../controller/UserController.js"


const router = express.Router()

const userController: UserController = new UserController();

router.post("/user",  (req: Request, res: Response) =>{userController.createUser(req, res)} );



export default router;