import React from 'react'
import AdminNavbar from '../components/navbar/AdminNavbar'
import PublicNavbar from "../components/navbar/PublicNavbar"
import CustomerNavbar from "../components/navbar/CustomerNavbar"
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SlideBook from '../components/landing page/SlideBook'
import ListBook from '../components/landing page/ListBook'
import IMG from '../../src/assets/img/background.png'
import Login from '../components/landing page/Login'
import Register from '../components/landing page/Register'
import { Button, Modal, Form } from 'react-bootstrap'
import { Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom';


function LandingPage() {

  document.body.style.backgroundImage = IMG;
  document.body.style.backgroundColor="#fff"

  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  const [login, setLogin] = useState({
    email : "",
    password : ""
  })

  const handleOnLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    console.log(login)
  }

  const [register, setRegister] = useState({
    fullname : "",
    email : "", 
    password : ""
  })

  const handleOnRegister = (e) => {
    setRegister({
      ...register,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmitRegister = (e) =>{
    e.preventDefault()
    console.log(register)
  }

  return (
    <div>
      <div className="navbar" style={{display : "flex", height : "7vh"}}>
          <PublicNavbar handleShow={handleShow} handleShowRegister={handleShowRegister}/>
      </div>

      <div className="modalLogin">
        <Modal show={show} onHide={handleClose}>
          
            <Modal.Body style={{padding : "20px"}}>
              <h1>Login</h1>
              <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              
            >
              <TextField name='email' value={login.email} onChange={handleOnLogin} id="outlined-basic" label="email" variant="outlined" style={{width : "96%"}}/>

              <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{width : "96%"}}
              name='password'
              value={login.password}
              onChange={handleOnLogin}
            />
            </Box>

            <Button type='submit' variant="dark" style={{width : "96%", marginLeft : "7px", height : "50px"}}>Login</Button>

            <p style={{marginLeft : "7px", marginTop : "10px"}}>Don't have an account? Click <Link to="/"> Here</Link></p>
                </Form.Group>
              </Form>
            </Modal.Body>
        </Modal>
      </div>

      <div className="modalRegister">
        <Modal show={showRegister} onHide={handleCloseRegister}>
          
            <Modal.Body style={{padding : "20px"}}>
              <h1>Register</h1>
              <Form onSubmit={handleSubmitRegister}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              
            >
              <TextField name='email' value={register.email} onChange={handleOnRegister} id="outlined-basic" label="email" variant="outlined" style={{width : "96%"}}/>

              <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{width : "96%"}}
              name="password"
              value={register.password}
              onChange={handleOnRegister}
            />

              <TextField name='fullname' value={register.fullname} onChange={handleOnRegister} id="outlined-basic" label="Fullname" variant="outlined" style={{width : "96%"}}/>
            </Box>

            <Button type='submit' variant="dark" style={{width : "96%", marginLeft : "7px", height : "50px"}}>Register</Button>

            <p style={{marginLeft : "7px", marginTop : "10px"}}>Don't have an account? Click <Link to="/"> Here</Link></p>
                </Form.Group>
              </Form>
            </Modal.Body>
        </Modal>
      </div>

      <div className="body"style={{minHeight : "93vh"}}>
        <div className="slider" style={{marginLeft : "1%", marginRight : "1%"}}>
          <SlideBook/>
        </div>

        <div className="listBook" style={{marginTop : "50px"}}>
          <ListBook/>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage