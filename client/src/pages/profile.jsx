import React from 'react'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import MyBook from '../components/profile/MyBook'
import Profiles from '../components/profile/profiles'

function Profile() {
  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
          <CustomerNavbar/>
      </div>

      <div className="All" style={{marginLeft : "10%", marginRight : "10%", minHeight : "93vh", marginTop : "100px"}}>
        <div className="Profiles">
          <Profiles/>
        </div>

        <div className="Mybook" style={{marginTop : "50px"}}>
          <MyBook/>
        </div>
      </div>
    </div>
  )
}

export default Profile