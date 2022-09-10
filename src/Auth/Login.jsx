import { TextField,Button } from '@mui/material'
import { Box } from '@mui/system'

import React,{useState} from 'react'
import axios from 'axios'

function Login() {
    const [userID, setuserID] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit=(e)=>{
        console.log(userID, password)
        e.preventDefault()
        const data={
            password:password
        }
        axios.post(`http://localhost:3030/users/${userID}/login`,data,{
        "Content-Type":"application/json"
    }).then((res)=>{
        console.log(res)
        // navigate('/login')
    }).catch((error)=>{
        console.log(error)
    })
    }

  return (
    <Box>
        <form onSubmit={handleSubmit}></form>
        <TextField type='password' label='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <TextField type='email' label='email' value={userID} onChange={(e)=>setuserID(e.target.value)}/>
        <Button onClick={handleSubmit} type='submit'>Submit</Button>
    </Box>
  )
}

export default Login