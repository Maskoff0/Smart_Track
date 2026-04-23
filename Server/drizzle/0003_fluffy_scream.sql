CREATE TABLE "assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"agentNumber" integer NOT NULL,
	"agentName" text NOT NULL,
	"fieldName" text NOT NULL,
	"cropType" text NOT NULL,
	"fieldStage" text NOT NULL,
	"fieldStatus" text NOT NULL
);
