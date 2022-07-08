import { Button } from 'react-bootstrap'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Login() {
  
  return (
    <div>
      <form action="" style={{width : "400px", height : "350px", margin : "auto", border : "1px solid black", marginTop : "100px", padding : "20px", borderRadius : "5px"}}>

        <h1>Login</h1>

         <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          
        >
          <TextField id="outlined-basic" label="email" variant="outlined" style={{width : "96%"}}/>

          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{width : "96%"}}
        />
        </Box>

        <Button variant="dark" style={{width : "96%", marginLeft : "7px", height : "50px"}}>Login</Button>

        <p style={{marginLeft : "7px", marginTop : "10px"}}>Don't have an account? Click <Link to="/"> Here</Link></p>
      </form>
       
    </div>
  )
}

export default Login