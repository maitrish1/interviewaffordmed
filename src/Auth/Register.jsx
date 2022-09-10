import { Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'


function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [credentials, setcredentials] = useState({
  //     firstname:"",
  //     lastname:'',
  //     email:"",
  //     password:""
  // })
//   const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    axios.post('http://localhost:3030/signup',data,{
        "Content-Type":"application/json"
    }).then((res)=>{
        console.log(res)
        // navigate('/login')
    }).catch((error)=>{
        console.log(error)
    })

    // const returndata=await res.json
    // console.log(returndata)
  };
  return (
    <Stack flexDirection="column" width="30%">
      <form onSubmit={handleSubmit}>
        <TextField
        type='text'
          label="First Name"
          value={firstname}
          // onChange={(e)=>setcredentials(...credentials,first)}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <TextField
        type='text'
          value={lastname}
          label="Last Name"
          onChange={(e) => setlastname(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button type="submit" >Submit</Button>
      </form>
    </Stack>
  );
}

export default Register;
