import React from 'react'
import AdminNavbar from '../components/navbar/AdminNavbar'
import PublicNavbar from "../components/navbar/PublicNavbar"
import CustomerNavbar from "../components/navbar/CustomerNavbar"
import { useState, useContext, } from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { UserContext } from "../../src/context/userContext";
import { API } from "../../src/config/api";
import SlideBook from '../components/landing page/SlideBook'
import ListBook from '../components/landing page/ListBook'
import IMG from '../../src/assets/img/background.png'
import { Button, Modal, Form, Alert } from 'react-bootstrap'
import { Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query'
import users from '../Dummy Data/user'


function LandingPage() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  
  const [message, setMessage] = useState(null);

  document.body.style.backgroundImage = IMG;
  document.body.style.backgroundColor="#fff"

  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
// });
  // Login
  const [login, setLogin] = useState({
    email : "",
    password : ""
  })
  console.log(login);

  const handleOnLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }

  
  //Register
  const [register, setRegister] = useState({
    name : "",
    email : "", 
    password : ""
  })

  const handleOnRegister = (e) => {
    setRegister({
      ...register,
      [e.target.name] : e.target.value
    })
  }
  
  

  const handleSubmit = useMutation(async (e) => {
    try {
        e.preventDefault();

        // Configuration Content-type
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        // Data body
        const body = JSON.stringify(register);
console.log(body);
        // Insert data user to database
        const response = await API.post('/register', body, config);
console.log(response);
        // Notification
        if (response.data.status === 'Success') {
            const alert = (
                <Alert variant="success" className="py-1">
                    Success
                </Alert>
            );
            setMessage(alert);
            
        } else {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
        }
    } catch (error) {
        const alert = (
            <Alert variant="danger" className="py-1">
                Failed
            </Alert>
        );
        setMessage(alert);
        console.log(error);
    }
});
  
const handleSubmitLogin = useMutation(async (e) => {
  try {
      e.preventDefault();

      // Configuration
      const config = {
          headers: {
              'Content-type': 'application/json',
          },
      };

      // Data body
      const body = JSON.stringify(login);

      // Insert data for login process
      const response = await API.post('/login', body, config);

      // Checking process
      if (response?.status === 200) {
          // Send data to useContext
          let dataUser = response.data.data.user;
          dispatch({
              type: 'LOGIN_SUCCESS',
              payload: dataUser,
          });
        
           //cek status
          // navigate("/p");

          const alert = (
              <Alert variant="success" className="py-1">
                  Login success
              </Alert>
          );
          setMessage(alert);
      }
  } catch (error) {
      const alert = (
          <Alert variant="danger" className="py-1">
              Login failed
          </Alert>
      );
      setMessage(alert);
      console.log(error);
  }
});
let navbarConfig = "";
if (!state.user.role) {
  navbarConfig = <PublicNavbar handleShow={handleShow} handleShowRegister={handleShowRegister}/>;
}
if (state.user.role == "customer") {
  navbarConfig = <CustomerNavbar  />;
}
if (state.user.role == "admin") {
  navbarConfig = <AdminNavbar />;
}


  const [lgShow, setLgShow] = useState(false)

  return (
    <div>
      <div className="navbar" style={{display : "flex", height : "7vh"}}>
      {navbarConfig}
       
      </div>
      <div className="modalLogin">
      <Modal show={show} onHide={handleClose}>
      
      <Modal.Body style={{padding : "20px"}}>
      <h1>Login</h1>
      {message} 
      <Form onSubmit={(e) => handleSubmitLogin.mutate(e)}>
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
              {message} 
              <Form onSubmit={(e) => handleSubmit.mutate(e)}>
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

              <TextField name='name' value={register.name} onChange={handleOnRegister} id="outlined-basic" label="Fullname" variant="outlined" style={{width : "96%"}}/>
            </Box>

            <Button type='submit' variant="dark" style={{width : "96%", marginLeft : "7px", height : "50px"}}>Register</Button>

            <p style={{marginLeft : "7px", marginTop : "10px"}}>Don't have an account? Click <Link to="/"> Here</Link></p>
                </Form.Group>
              </Form>
            </Modal.Body>
        </Modal>
      </div>

      <div className="body"style={{minHeight : "93vh"}}>
      
        <div className="modal">
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{}}
        >
        
              <Modal.Body style={{textAlign : "center", color : "rgba(65, 222, 40, 0.85)", background : "transparent"}}>This Product Is Sucessfully Added To Cart</Modal.Body>
            </Modal>
        </div>

        <div className="slider" style={{marginLeft : "1%", marginRight : "1%"}}>
          <SlideBook setLgShow={setLgShow}/>
        </div>

        <div className="listBook" style={{marginTop : "50px"}}>
          <ListBook/>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage