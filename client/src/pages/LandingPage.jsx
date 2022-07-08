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
import { useStat } from 'react'

function LandingPage() {

  document.body.style.backgroundImage = IMG;
  document.body.style.backgroundColor="#fff"

  const [openLogin, setOpenLogin] = useState(false);

  const [openRegister, setOpenRegister] =useState(false)

  const handleClickLogin = () => {
    setOpenLogin(true)
  }

  const handleOpenRegister = () => {
    setOpenRegister(true)
  }

  return (
    <div>
      <div className="navbar" style={{display : "flex", height : "7vh"}}>
          <PublicNavbar handleClickLogin={handleClickLogin} handleOpenRegister={handleOpenRegister}/>
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