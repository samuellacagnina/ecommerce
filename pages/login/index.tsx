import React, { useContext } from 'react'
import { useAuthContext } from '../../src/context/AuthContext'



const Login = () => {

 const{ userName } = useAuthContext()
 console.log(userName);

  
  return (
    <div>
        <h1>Login Page</h1>
        <p>{ userName }</p>
    </div>
  )
}

export default Login
