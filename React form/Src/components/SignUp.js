import React, { useEffect, useState } from "react"
import axios from "axios"
import{useNavigate, Link} from "react-router-dom"

function Login(){
    const history=useNavigate
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/SignUp",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                    alert("user already exist")
                    

                }
                else if(res.data="notexist"){
                    history("/Home",{state:{id:email }})

                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);

        }
    }
    return(
        <div className="Login">

            <h1>SignUp</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""/>

                <input type="submit" onClick={submit}/>
            </form>
            <br/>
            <p>OR</p>
            <Link to="/Login">Login Page</Link>


        </div>
    )
}
export default Login