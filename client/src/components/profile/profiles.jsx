import React, { useEffect } from "react"
import IMG from "../../assets/img/email.png"
import IMG2 from "../../assets/img/gender.png"
import IMG3 from "../../assets/img/contact.png"
import IMG4 from "../../assets/img/location.png"
import IMG5 from "../../assets/img/avatar.PNG"
import { Box, TextField } from '@mui/material'
import { useContext } from "react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Form, Row, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import cssModule from "../../assets/css/EditProfile.module.css"
import { API } from "../../config/api"
import { useMutation, useQuery } from "react-query"
import { UserContext } from "../../context/userContext"

function Profiles() {

    const [state, dispacth] = useContext(UserContext);
    const [editProfile, setEditProfile] = useState(false);
    const handleClose = () => setEditProfile(false);
    const handleShow = () => setEditProfile(true);
    const [profile, setProfile] = useState({}) //Store profile data
    const [preview, setPreview] = useState(null); //For image preview

    const user = state.user.email


    const [form, setForm] = useState({
        gender: '',
        phone: '',
        address: '',
        avatar: ''
    });

    let { data: profileData } = useQuery("profileCache", async () => {
        const response = await API.get("/profile");
        console.log(response.data.data.profile);
        return response.data.data.profile
    })

    console.log(profileData);

    useEffect(() => {
        if (profileData) {
            setPreview(profileData.avatar)
            setForm({
                ...form,
                phone: profileData.phone,
                gender: profileData.gender,
                address: profileData.address,
            })
            setProfile(profileData)
        }
    }, [profileData]);


    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]:
            e.target.type === 'file' ? e.target.files : e.target.value,
        });

        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            // Configuration
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }

            // Store data with FormData as object
            const formData = new FormData()
            if (form.avatar) {
                formData.set('avatar', form?.avatar[0], form?.avatar[0]?.name)
            }
            formData.set('gender', form.gender)
            formData.set('phone', form.phone)
            formData.set('address', form.address)
            console.log('isi form:', form);
            // Insert profile data
            const response = await API.patch('/profile', formData, config)
            console.log(response)
            handleClose()
        } catch (error) {
            console.log(error)
        }
    })

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
                            <h6>{user}</h6>
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="gender" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG2} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>{profileData?.gender}</h6>
                            <p>Gender</p>
                        </div>
                    </div>
                    <div className="contact" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG3} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>{profileData?.phone}</h6>
                            <p>Phone</p>
                        </div>
                    </div>
                    <div className="location" style={{display : "flex"}}>
                        <div className="img">
                            <img src={IMG4} alt="" width={40}/>
                        </div>
                        
                        <div className="teks" style={{marginLeft : "10px"}}>
                            <h6>{profileData?.address}</h6>
                            <p>Location</p>
                        </div>
                    </div>
                </div>

                <div className="right" style={{display : 'flex', flex : "1", flexDirection : "column"}}>
                    <div className="content" style={{justifyContent : "center", display : "flex", flexDirection : "column", margin : "auto"}}>
                        <div className="img">
                            <img src={profileData?.avatar} alt="" width={200}/>
                        </div>
                    
                        <Button onClick={handleShow} variant='danger' style={{width : "100%"}}>Edit Profile</Button>
                    </div>
                    
                    <div className="modalRegister">
        <Modal show={editProfile} onHide={handleClose}>
          
            <Modal.Body style={{padding : "20px"}}>
              <h1>Edit Profile</h1>
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

            {preview && (
                                <div>
                                    <img
                                        src={preview}
                                        style={{
                                            maxWidth: '150px',
                                            maxHeight: '150px',
                                            objectFit: 'cover',
                                            marginBottom: '5px',
                                            borderRadius: '10%',
                                            
                                        }}
                                        alt="preview"
                                    />
                                </div>
            )}
                            <input
                                type="file"
                                className="form-control bg-transparent border-0 text-white"
                                id="upload"
                                name="avatar"
                                accept='image/*'
                                onChange={handleChange}
                                hidden
                            />
                            <label for="upload" className="labelUploadProfile" style={{border : "1px solid black", width : "130px", height : "40px", textAlign : "center", borderRadius : "5px", alignItems : "center", backgroundColor : "red"}}>
                                Upload File
                            </label>

              <TextField name='gender' value={form?.gender} onChange={handleChange} id="outlined-basic" label="Gender" variant="outlined" style={{width : "96%"}}/>

              <TextField name='phone' value={form?.phone} onChange={handleChange} id="outlined-basic" label="Phone" variant="outlined" style={{width : "96%"}}/>

              <TextField name='address' value={form?.address} onChange={handleChange} id="outlined-basic" label="Address" variant="outlined" style={{width : "96%"}}/>   
            
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