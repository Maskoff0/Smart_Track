import { Router } from "express";
import { createFieldSchema, listfilesSchema } from "../Validation/Employees.js";
import { db } from "../db/db.js";
import { fields } from "../db/schema.js";
import { desc } from "drizzle-orm";

export const fieldUpload = Router();

const MAX_LIMIT = 100

fieldUpload.post('/' , async(req, res)=>{
    const parsed = createFieldSchema.safeParse(req.body);

    if(!parsed){
        res.status(500).json({message : 'Invalid Credentials'})
    }

    const {data : {fieldName , cropType , fieldStage , fieldStatus}} = parsed;

    try{
        const result = await db.insert(fields)
        .values({...parsed.data})

        res.status(201).json({message : "Field created successfully"})

    }catch(error){
        res.status(500).json({message : "Internal Server error"})
        console.log(error)
    }
})
export const field = Router();

field.get('/' , async(req , res) =>{
    const parsed = listfilesSchema.safeParse(req.query);

    if(!parsed.success){
        res.status(400).json({messge : "Records failed to fetch"})
    }

    const limit = Math.min(parsed.data.limit ?? 50 , MAX_LIMIT)

    try{
        const data = await db
        .select()
        .from(fields)
        .orderBy((desc(fields.id)))
        .limit()
        
        res.status(201).json({data})
    }catch(error){
        res.status(400).json({message : "Internal Server Error"})
        console.log(error)
    }
})