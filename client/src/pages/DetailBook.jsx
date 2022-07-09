import React from 'react'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import Card from "../components/detail book/Card"
import About from '../components/detail book/About'

function DetailBook() {
  return (
    <div>
      <div className="navbar">
        <CustomerNavbar/>
      </div>

        <div className="book" style={{minHeight : "93vh"}}>
          <Card/>

          <About/>
        </div>
          
    </div>
  )
}

export default DetailBook