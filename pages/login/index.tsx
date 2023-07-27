import React, { useContext } from 'react'
import { useAuthContext } from '../../src/context/AuthContext'



const Login = () => {

 const{ userName } = useAuthContext()


  
  return (
    <div>
        <h1 className="text-center">Welcome { userName }</h1>
    </div>
  )
}

export default Login
