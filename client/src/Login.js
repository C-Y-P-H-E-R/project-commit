import React, {useState} from 'react'
import "./css/login.css"
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const [loginName, setLoginName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const handleClick = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:3001/login", {
                method: "POST",
                body: JSON.stringify({
                    name: loginName,
                    password: loginPassword,
                }),
                headers: {
                    "Content-type" : 'application/json',
                },
        }).then((response) => response.json())
        .then((json) => {
            if(json.status === 201) {
                navigate('/greet', {state: {"name": loginName}})
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    

  return (
    <div>
        <h1>Login Form</h1>

        <form>
            <input placeholder="Name" name="name" type="text" value={loginName} onChange={(e) => setLoginName(e.target.value)} />
            <br />
            <input placeholder="Password" name="password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <br />
            <button className="sub" onClick={handleClick}>Submit</button>
            <h3>Dont have a account ?</h3>
            <a href="/Signup">Create a new account</a>
        </form>

    </div>
  )
}

export default Login