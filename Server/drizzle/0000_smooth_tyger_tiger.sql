CREATE TABLE "employees" (
	"employeeNumber" serial PRIMARY KEY NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
