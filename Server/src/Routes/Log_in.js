import { Router } from "express";
import { employees } from "../db/schema.js";
import { createEmployeeSchema, QueryEmployeeSchema } from "../Validation/Employees.js";
import { db } from "../db/db.js";
import { eq } from "drizzle-orm";
import { agents } from "../db/schema.js";

 export const employee = Router();

 employee.post('/' , async(req , res) => {
   const parsed = createEmployeeSchema.safeParse(req.body)

   if(!parsed.success){
    res.status(400).json({message : 'Invalid Credentials'})
   }

   const {data : {employeeNumber , password , role}} = parsed;
   
   try{

    const result = await db.insert(employees).values({
        ...parsed.data

    })
    res.status(201).json({
        message: 'Record created Sucessfully'
    })

   }catch(error){
    console.log(error)
   }
 })


 export const  Veriyfy_LogIn = Router()

 Veriyfy_LogIn.post('/' , async(req , res) => {
    const parsed = QueryEmployeeSchema.safeParse(req.body)

    if(!parsed.success){
        res.status(400).json({message : "Invalid credentials"})
    }

    const {employeeNumber, password} = parsed.data ;

    try{
        const existingUser = await db
        .select()
        .from(employees)
        .where(eq(employees.employeeNumber , employeeNumber))
        .limit(1);
    
        if(existingUser.length === 0 || existingUser[0].password !== password){
            return res.status(400).json({message : 'Invalid credentials'})
        }else{
            let agentName = null;
            if(existingUser[0].role === "Agent"){
                const agentData = await db
                .select()
                .from(agents)
                .where(eq(agents.agentNumber , employeeNumber))
                .limit(1)

                agentName = agentData.length > 0 ? agentData[0].agentName : null;

            }
            res.status(201).json({message : 'Log-In successful' , role :existingUser[0].role ,agentName : agentName})
        }

    }catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal sever error'})
    }



 })