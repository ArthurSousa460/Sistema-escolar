import express from "express";
import {Request, Response} from "express";
import UserController from "../controller/UserController.js"
import { User } from "../../node_modules/.prisma/client/index";
import userBody from "../types/userBody";


const router = express.Router()

const userController: UserController = new UserController();

router.post("/user",  (req: Request, res: Response) => userController.createUser(req, res));



export default router;