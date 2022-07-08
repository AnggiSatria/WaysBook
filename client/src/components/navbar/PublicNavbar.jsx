import IMG from "../../assets/img/WaysBookLogo.png"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from 'react-bootstrap/Navbar'

function PublicNavbar(props) {
  return (
    <div style={{display : "flex", width : "100%"}}>
            <div className="left" style={{marginLeft : "50px", flex : "50%", alignItems : "center", display : "flex"}}>
                <img src={IMG} alt="" />
            </div>

            <div className="right" style={{display : "flex", flex : "50%", justifyContent : "flex-end", marginRight : "50px", alignItems : "center"}}>
                <div className="login" style={{marginRight : "20px"}}>
                    <Button variant="outlined" color="inherit" onClick={props.handleClickLogin}>Login</Button>
                </div>

                <div className="register">
                    <Button variant="contained" color="inherit"  onClick={props.handleClickRegister}>Register</Button>
                </div>
            </div>
    </div>
  )
}

export default PublicNavbar