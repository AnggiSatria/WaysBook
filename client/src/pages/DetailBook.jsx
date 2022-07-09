import React from 'react'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import Card from "../components/detail book/Card"
import About from '../components/detail book/About'
import IMG from "../assets/img/background.png"
import "../assets/css/bg.css"

function DetailBook() {

  document.body.style.backgroundImage = "url(../assets/img/background.png)";

  return (
    <div>
      <div className="navbar">
        <CustomerNavbar/>
      </div>

        <div className="book" style={{minHeight : "93vh", marginLeft : "10%", marginRight : "10%"}}>
          <Card/>

          <About/>
        </div>
          
    </div>
  )
}

export default DetailBook