import UserService from "../service/UserService.js";
import { Request, Response } from "express";
import userBody from "../types/userBody.js";
import responseUser from "../types/responseUser";

export default class UserController{
    private userService: UserService;

    constructor(){
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response){
        try{
            const {name, email, password, role_id} = req.body as userBody;
            const newUser = await this.userService.createUser(name, email, password, role_id);
            if(newUser){
                return res.status(201).json({"user": newUser});
            }
            return res.status(400).json({"message": "User already exist"})
        }catch(error){
            console.log(error);
             return res.status(400).json({"message": "User not create"});
        }
    }
}