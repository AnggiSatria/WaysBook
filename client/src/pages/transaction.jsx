import React from 'react'
import AdminNavbar from '../components/navbar/AdminNavbar'
import Form from '../components/transaction/form'

function Transaction() {
  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
          <AdminNavbar/>
      </div>

      <div className="form" style={{marginLeft : "10%", marginRight : "10%", minHeight : "93vh", marginTop : "100px"}}>
        <Form/>
      </div>
    </div>
  )
}

export default Transaction