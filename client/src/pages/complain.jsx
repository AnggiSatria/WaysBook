import React from 'react'
import Left from '../components/complain/left'
import Right from '../components/complain/right'
import AdminNavbar from '../components/navbar/AdminNavbar'

function Complain() {
  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
        <AdminNavbar/>
      </div>

      <div className="all" style={{marginLeft : "10%", marginRight : '10%', marginTop : "100px", minHeight : "93vh"}}>
        <div className="left">
          <Left/>
        </div>

        <div className="right">
          <Right/>
        </div>
      </div>
    </div>
  )
}

export default Complain