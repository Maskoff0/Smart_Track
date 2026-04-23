import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Admin from './Pages/Admin/Admin.jsx'
import Agent from './Pages/Agent/Agent.jsx'
import Fields from './components/Fields/fields.jsx'
import Agents from './components/agents/Agents.jsx'
import Dashboard from './components/Dashboard/dashboard.jsx'
import Assignments from './components/Assignment/Assignments.jsx'
import Agent_Dashboard from './components/Agent_dashboard/Dashboard.jsx'
import Updates from './components/Agent_Updates/Updates.jsx';

const App = () => {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin" element={<Admin/>}>
            <Route index element={<Dashboard/>}/>
            <Route path = "fields" element={<Fields/>}/>
            <Route path = "agents" element={<Agents/>}/>
            <Route path = "assignments" element={<Assignments/>}/>
          </Route>
          <Route path="/agent" element={<Agent/>}>
            <Route index element = {<Agent_Dashboard/>}/>
            <Route path = 'updates' element={<Updates/>}/>
          </Route>
         
          
        </Routes>
      </BrowserRouter>
      </>
  )
}


export default App
