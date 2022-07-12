import React from 'react'
import Form from '../components/add book/form'
import AdminNavbar from '../components/navbar/AdminNavbar'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { API } from "../config/api"

function AddBook() {

  return (
    <div>
      <div className="navbar">
        <AdminNavbar/>
      </div>

      <div className="form" style={{marginLeft : "10%", marginRight : "10%", marginTop : "50px"}}>
        <Form/>
      </div>
    </div>
  )
}

export default AddBook