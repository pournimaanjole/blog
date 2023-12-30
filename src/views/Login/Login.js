import React from 'react'
import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

     const login = async () => { 
     if(!username){
        alert("user name is required")
        return
     }
     if(!password){
        alert("password is required")
        return
     }
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username:username ,
              password: password,
              })
          })
          .then(res =>{
            // if (!res.ok) {
            //     throw new Error(`HTTP error! Status: ${res.status}`);
            // }
            return res.json();
        }).then((data) => {
               console.log(data)
               if(data.token){
                localStorage.setItem("token",JSON.stringify(data.token))
               window.location.href='/'
               }else(
                alert("invalid credential")
               )
               
          }).catch((error) => {
            // alert("invalid credential")
            console.log(error)
          });
      }


    return (
        <div>
            <div className='loginsignup'>
                <div className='loginsinup-container login-container'>
                    <h1>login</h1>
                    <div className='loginsingup-fields'>
                        <input type='email'
                            value={username}
                            placeholder='enter  username'
                            onChange={(e) => {
                                setusername(e.target.value)

                            }}
                            className='inputfields'
                        />

                        <input type='password'
                            value={password}
                            placeholder='enter  password'
                            onChange={(e) => {
                                setpassword(e.target.value)

                            }}
                            className='inputfields'
                        />
                        <button type='button' onClick={login}>login</button>

                      
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login
