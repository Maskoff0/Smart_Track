import { Router } from "express";
import { createAssignmentSchema, listAssignmentsSchema } from "../Validation/Employees.js";
import { db } from "../db/db.js";
import { assignments } from "../db/schema.js";
import { desc, eq } from "drizzle-orm";


export const fieldUpload = Router();

const MAX_LIMIT = 100

export const assignmentUpload = Router();

assignmentUpload.post('/' , async(req, res)=>{
    const parsed = createAssignmentSchema.safeParse(req.body);

    if(!parsed){
        res.status(500).json({message : 'Invalid Credentials'})
    }

    const {data : {agentName , fieldName , cropType , fieldStage , fieldStatus}} = parsed;

    try{
        const result = await db.insert(assignments)
        .values({...parsed.data})

        res.status(201).json({message : "Assignment created successfully"})

    }catch(error){
        res.status(500).json({message : "Internal Server error"})
        console.log(error)
    }
})

export const assignmentList = Router();

assignmentList.get('/' , async(req , res) => {
        const parsed = listAssignmentsSchema.safeParse(req.query);
    
        if(!parsed.success){
            res.status(400).json({messge : "Records failed to fetch"})
        }
    
        const limit = Math.min(parsed.data.limit ?? 50 , MAX_LIMIT)
        const { agentName } = req.query;
    
        try{
            let query;
            
            // Filter by agentName if provided
            if(agentName) {
                query = db
                .select()
                .from(assignments)
                .where(eq(assignments.agentName, agentName))
                .orderBy((desc(assignments.id)))
                .limit(limit)
            } else {
                query = db
                .select()
                .from(assignments)
                .orderBy((desc(assignments.id)))
                .limit(limit)
            }
            
            const data = await query
            
            res.status(201).json({data})
        }catch(error){
            res.status(400).json({message : "Internal Server Error"})
            console.log(error)
        }
})

export const assignmentUpdate = Router();

assignmentUpdate.put('/' , async(req, res) => {
    const { id } = req.query;
    const parsed = createAssignmentSchema.safeParse(req.body);

    if(!parsed.success){
        res.status(400).json({message: 'Invalid data'})
        return
    }

    try{
        const result = await db
        .update(assignments)
        .set({...parsed.data})
        .where(eq(assignments.id, parseInt(id)))

        res.status(200).json({message: "Assignment updated successfully"})
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
        console.log(error)
    }
})