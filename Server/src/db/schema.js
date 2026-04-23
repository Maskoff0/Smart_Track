import { pgTable, serial, text, integer, timestamp, pgEnum, jsonb, foreignKey } from 'drizzle-orm/pg-core';

export const employees = pgTable('employees' , {
    employeeNumber: serial('employeeNumber').primaryKey(),
    password : text('password').notNull(),
    role : text('role').notNull(),
    createdAt : timestamp('created_at').notNull().defaultNow()
})

export const fields = pgTable('fields' , {
    id : serial('id').primaryKey(),
    fieldName :text("fieldName").notNull(),
    cropType: text("cropType").notNull(),
    fieldStage : text("fieldStage").notNull(),
    fieldStatus : text("fieldStatus").notNull()

})

export const agents = pgTable('agents' , {
    id : serial('id').primaryKey(),
    agentNumber : integer('agentNumber').notNull(),
    agentName : text('agentName').notNull(),

})

export const assignments = pgTable('assignments' , {
    id : serial('id').primaryKey(),
    //agentNumber : integer('agentNumber').notNull(),
    agentName : text('agentName').notNull(),
    fieldName : text('fieldName').notNull(),
    cropType : text('cropType').notNull(),
    fieldStage : text('fieldStage').notNull(),
    fieldStatus : text('fieldStatus').notNull()
})