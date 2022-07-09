import React from 'react'
import Left from '../components/cart/Left'
import Right from '../components/cart/Right'
import CustomerNavbar from '../components/navbar/CustomerNavbar'

function Cart() {
  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
        <CustomerNavbar/>
      </div>

      <div className="all" style={{marginLeft : "10%", marginRight : "10%", minHeight : "93vh", marginTop : "100px", display : "flex"}}>
        <div className="left" style={{display : "flex", flex : "50%", marginRight : "1%"}}>
          <Left/>
        </div>

        <div className="right" style={{display : "flex", flex : "50%", marginLeft : "1%"}}>
          <Right/>
        </div>
      </div>
    </div>
  )
}

export default Cart