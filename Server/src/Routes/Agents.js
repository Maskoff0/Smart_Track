import { Router} from "express";
import { createAgentSchema, listAgentsSchema } from "../Validation/Employees.js";
import { agents } from "../db/schema.js";
import { db } from '../db/db.js';
import { desc } from "drizzle-orm";

const MAX_LIMIT = 100;

export const agent = Router();

agent.post('/' , async(req , res) => {
    const parsed = createAgentSchema.safeParse(req.body);

    if(!parsed.success){
        res.status(400).json({message: "Invalid Credentials"})
    }

    const {data : {agentNumber , agentName}} = parsed;

    try{
        const result = await db.insert(agents).values({...parsed.data})
        res.status(201).json({message : "Agent created successfully"})
    }catch(error){
        console.log(error)
        res.status(500).json({message : "Internal Server Error"})
    }
})

export const listAgents = Router();

listAgents.get('/' , async(req , res) => {
    const parsed = listAgentsSchema.safeParse(req.query);

    if(!parsed.success){
        res.status(400).json({message : "Records failed to fetch"})
    }

    const limit = Math.min(parsed.data.limit ?? 50 , MAX_LIMIT)

    try{
        const data = await db
        .select()
        .from(agents)
        .orderBy((desc(agents.id)))
        .limit()
        
        res.status(201).json({data})

    }catch(error){
        console.log(error)
        res.status(500).json({message : "Internal Server Error"})
    }
})