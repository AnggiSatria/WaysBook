import React from 'react'
import IMG from "../../assets/img/email.png"
import IMG2 from "../../assets/img/gender.png"
import IMG3 from "../../assets/img/contact.png"
import IMG4 from "../../assets/img/location.png"
import IMG5 from "../../assets/img/avatar.PNG"
import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import cssModule from "../../assets/css/EditProfile.module.css"

function Profiles() {

    const [editProfile, setEditProfile] = useState(false);
    const handleClose = () => setEditProfile(false);
    const handleShow = () => setEditProfile(true);

    const [preview, setPreview] = useState(null); //For image preview

    const [form, setForm] = useState({
        name: '',
        image: '',
        desc: '',
        price: '',
        qty: ''
    });

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]:
            e.target.type === 'file' ? e.target.files : e.target.value,
        });
    }

  return (
    <div>
        <h3>Profile</h3>

        <div className="card" style={{width : "100%", backgroundColor : "rgba(243, 132, 189, 0.8)", display : "flex", flex : "50%"}}>
            <div className="all" style={{flex : "50%", display : "flex", padding : "20px"}}>
                <div className="left" style={{display : "flex", flexDirection : "column", flex : "1"}}>
                    <div className="email" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>anggisatria122@gmail.com</h6>
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="gender" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG2} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>anggisatria122@gmail.com</h6>
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="contact" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG3} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>anggisatria122@gmail.com</h6>
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="location" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG4} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>anggisatria122@gmail.com</h6>
                            <p>Email</p>
                        </div>
                    </div>
                </div>

                <div className="right" style={{display : 'flex', flex : "1", flexDirection : "column"}}>
                    <div className="content" style={{justifyContent : "center", display : "flex", flexDirection : "column", margin : "auto"}}>
                        <div className="img">
                            <img src={IMG5} alt="" width={200}/>
                        </div>
                    
                        <Button onClick={handleShow} variant='danger' style={{width : "100%"}}>Edit Profile</Button>
                    </div>
                    
                    <div className="modalRegister">
        <Modal show={editProfile} onHide={handleClose}>
          
            <Modal.Body style={{padding : "20px"}}>
              <h1>Edit Profile</h1>
              <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              
            >
              <TextField name='email' id="outlined-basic" label="Gender" variant="outlined" style={{width : "96%"}}/>

              <TextField name='email' id="outlined-basic" label="Phone" variant="outlined" style={{width : "96%"}}/>

              <TextField name='fullname'  id="outlined-basic" label="Address" variant="outlined" style={{width : "96%"}}/>
              
              <div className={cssModule.imgGroup}>
              <label htmlFor="upload">
                Upload file
              </label>
              {preview && (
                <div>
                  <img
                    src={preview}
                    style={{
                      maxWidth: '60px',
                      maxHeight: '60px',
                      objectFit: 'cover',
                    }}
                    alt={preview}
                  />
                </div>
              )}
              <input
                type="file"
                id="upload"
                name="image"
                hidden
                onChange={handleChange}
              />
              </div>
            
            </Box>

            <Button type='submit' variant="dark" style={{width : "96%", marginLeft : "7px", height : "50px"}}>Save</Button>

                </Form.Group>
              </Form>
            </Modal.Body>
        </Modal>
      </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profiles