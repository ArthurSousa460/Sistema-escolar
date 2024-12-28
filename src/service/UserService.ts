import { PrismaClient } from "@prisma/client";
import { encryptPassword } from "../utils/encrypt.js" 
import responseUser from "../types/responseUser.js";


export default class UserService{

    private prisma: PrismaClient;


    constructor(){
        this.prisma = new PrismaClient();
    }

    async createUser(name: string, email: string, password: string, role_id: number): Promise<responseUser | undefined> {
        try{
            const user = await this.prisma.user.findFirst({
                where:{
                    email: email
                }
            })
            if(!user){
                const hashPassword = await encryptPassword(password);
                const newUser = await this.prisma.user.create({
                    data:{
                        name: name,
                        email: email,
                        password: hashPassword,
                        role_id: role_id
                    },
                    select:{
                        id: true,
                        name: true,
                        email: true,
                        role_id: true

                    }
                })
                return <responseUser>newUser;
            }
            return undefined
            
        }catch(error){
            console.log(error);
            return undefined
        }
    }
}