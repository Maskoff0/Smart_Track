import {z} from 'zod'

export const createEmployeeSchema = z.object({
  employeeNumber: z.string().min(1),
  password: z.string().min(4),
  role: z.string().min(1),
})

export const QueryEmployeeSchema = z.object({
  employeeNumber : z.string().min(1),
  password: z.string().min(4),
})

export const createFieldSchema = z.object({
  fieldName : z.string().min(1),
  cropType : z.string().min(1),
  fieldStage : z.string().min(1),
  fieldStatus : z.string().min(1)
})

export const listfilesSchema = z.object({
 limit: z.coerce.number().int().positive().max(100).optional()
})

export const createAgentSchema = z.object({
  agentNumber : z.number().int().positive().min(3),
  agentName : z.string().min(1)
})

export const listAgentsSchema = z.object({
  limit : z.coerce.number().int().positive().max(100).optional()
})

export const createAssignmentSchema = z.object({
  //agentNumber : z.number().int().positive().min(3),
  agentName : z.string().min(1),
  fieldName : z.string().min(1),
  cropType : z.string().min(1),
  fieldStage : z.string().min(1),
  fieldStatus : z.string().min(1)
})

export const listAssignmentsSchema = z.object({
  limit : z.coerce.number().int().positive().max(100).optional()
})