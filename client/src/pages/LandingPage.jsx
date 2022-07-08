import React from 'react'
import AdminNavbar from '../components/navbar/AdminNavbar'
import PublicNavbar from "../components/navbar/PublicNavbar"
import CustomerNavbar from "../components/navbar/CustomerNavbar"
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SlideBook from '../components/landing page/SlideBook'
import ListBook from '../components/landing page/ListBook'


function LandingPage() {

  document.body.style.backgroundImage = "   url('../assets/img/background.png')";
  document.body.style.backgroundColor="#fff"

  return (
    <div>
      <div className="navbar" style={{display : "flex", height : "7vh"}}>
          <PublicNavbar/>
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