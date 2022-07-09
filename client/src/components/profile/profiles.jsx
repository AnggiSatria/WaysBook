import React from 'react'
import IMG from "../../assets/img/email.png"
import IMG2 from "../../assets/img/gender.png"
import IMG3 from "../../assets/img/contact.png"
import IMG4 from "../../assets/img/location.png"
import IMG5 from "../../assets/img/avatar.PNG"
import { Button } from '@mui/material'

function Profiles() {
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
                    
                        <Button variant='contained' color='error' style={{width : "100%"}}>Edit Profile</Button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profiles