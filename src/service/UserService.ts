import { PrismaClient } from "@prisma/client";
import userBody from "../types/userBody.js";


export default class UserService{

    private prisma: PrismaClient;


    constructor(){
        this.prisma = new PrismaClient();
    }

    async createUser(name: string, email: string, password: string, role_id: number): Promise<userBody | undefined> {
        try{
            const user = await this.prisma.user.findFirst({
                where:{
                    email: email
                }
            })
            if(!user){
                const newUser = await this.prisma.user.create({
                    data:{
                        name: name,
                        email: email,
                        password: password,
                        role_id: role_id
                    }
                })
                return newUser 
            }
            return undefined
            
        }catch(error){
            console.log(error);
            return undefined
        }
    }
}