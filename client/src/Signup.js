import React, {useState} from 'react'
import "./css/login.css"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [newName,setNewName] = useState("")
  const [newPassword, setNewPassword] = useState("")
    
    const handleClick = async (e) => {
        // console.log("handleclick", newName, newPassword)
        e.preventDefault();
        let res = await fetch("http://localhost:3001/signup", {
                method: "POST",
                body: JSON.stringify({
                    name: newName,
                    password: newPassword,
                }),
                headers: {
                    "Content-type" : 'application/json',
                },
        })
        .then((response) => response.json())
        .then((json) => {
          if(json.status === 201) {
            navigate('/greet', {state: {"name" : newName}})
          } else if(json.status === 301) {
            console.log(json.message)
          }
        })
    }
  return (
    <div>
        <h1>Sign Up</h1>

        <form action="/signup" method="post" >
            <input placeholder="Name" name="name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <br />
            <input placeholder="Password" name="password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <br />
            <button className="sub" onClick={handleClick}>Submit</button>
        </form>

        <a href="/login">Go back to login page</a>
    </div>
  )
}

export default Signup