"use server"
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";


export async function createOnRampTransaction(amount: number,provider: string) {
    const session =await getServerSession(authOptions);
    const userId=session.user.id;
    const token=Math.random().toString();
    if(!userId){
        return{
            message:"User not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data:{
            userId:Number(userId),
            startTime:new Date(),
            amount:amount,
            status:"Processing",
            provider:provider,
            token:token 
        }
    })

   
}