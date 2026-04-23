import React, {useState} from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [employeeNumber , setemployeeNo] = useState('');
  const [password , setpassword] = useState('');
  const [role , setrole] = useState('Admin');

  const url = "http://localhost:5000/logIn"
  const navigate = useNavigate()

  const onSubmit = (e) => {
     e.preventDefault()
     //console.log({employeeNumber , password , role})

     fetch(url , {
      method : "POST" ,
      headers : {
        "Content-Type":"application/json"
      },
      body : JSON.stringify({
        employeeNumber : employeeNumber,
        password : password
      })
     }).then(res => res.json())
     .then(data => { 
      if(data.role !== role){
        return alert('Select the correct role')
      }
      if(data.agentName) {
        localStorage.setItem('agentName' , data.agentName)
      }
       //console.log('Success:', data)
       if(data.role  === "Agent"){
        navigate('/Agent')
       }else if(data.role === "Admin"){
        navigate('/Admin')
       }else {
        console.error('Wrong Credentials')
       }
       
     })
     .catch(err => console.error(err))
    
  }

  return (
    <div className="Home">
      <div className="Header">
        <h1>SMART TRACK</h1>
        <h3>All in one place field management System</h3>
      </div>

           {/*Registration Form*/}
           {/*Log-in*/}
       <div className="Form-Container" id="Log-In">
        <h2>Log-In</h2>
         <form className="inputs" onSubmit={onSubmit}>
            <div>
              <label>EmployeeNo</label>
              <input type="text" className="Input" placeholder="Enter EmployeeNo..." onChange={(e) => setemployeeNo(e.target.value)}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" className="Input" placeholder="Enter Password..." onChange = {(e)=> setpassword(e.target.value)}/>
            </div>
            <div>
              <label>Role</label>
              <select className='role' onChange={(e) => setrole(e.target.value)}>
                <option value="Admin">Admin</option>
                <option value="Agent" >Agent</option>
              </select>
            </div>
            <button type="submit" id="Submit">Log-In</button>
         </form>
       </div>
            
    </div>
  )
}

export default Home