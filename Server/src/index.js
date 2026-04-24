
import express, { json } from 'express'
import serverless from 'serverless-http'
import { Veriyfy_LogIn } from './Routes/Log_in.js';
import { employee } from './Routes/Log_in.js';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import { field } from './Routes/Fields.js';
import { fieldUpload } from './Routes/Fields.js';
import { agent, listAgents } from './Routes/Agents.js';
import { assignmentList, assignmentUpload, assignmentUpdate } from './Routes/Assignments.js';


const PORT = process.env.PORT || 5000 ;

const app = express();
export const handler = serverless(app);

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:5173',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));


app.use('/employees' , employee )
app.use('/logIn' , Veriyfy_LogIn )
app.use('/fieldUpload' , fieldUpload)
app.use('/field' , field)
app.use('/agent' , agent)
app.use('/list' , listAgents)
app.use('/assignments' , assignmentUpload)
app.use('/assignmentlist' , assignmentList)
app.use('/assignmentupdate' , assignmentUpdate)

app.get('/', (req ,res)=>{
   res.json({message :'Hello World'})
})

app.listen(PORT , () =>{
    console.log(`Server is running on localhost:${PORT}`)
})


