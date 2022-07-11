import React from 'react'
import "../../assets/css/bg.css"
import { Button } from "react-bootstrap"

function Right() {
  return (
    <div style={{width : "100%", marginTop : "88px"}}>
        
        <hr  style={{border : "1px solid black"}}/>

        <div className="subtotal" style={{display : "flex", width : "100%"}}>
            <div className="teks" style={{display : "flex", flexDirection : "column", flex : "50%"}}>
                <h5>Subtotal</h5>
                <h5 style={{marginTop : "30px"}}>Qty</h5>
            </div>

            <div className="price" >
                <p>Rp.500.000,-</p>
                <p style={{marginTop : "30px"}}>2</p>
            </div>
        </div>

        <hr  style={{border : "1px solid black"}}/>

        <div className="total" style={{display : "flex", width : "100%"}}>
            <div className="teks2" style={{display : "flex", flexDirection : "column", flex : "50%"}}>
                <h5 style={{color : "rgba(30, 217, 30, 0.8)"}}>Total</h5>
            </div>
            
            <div className="price2">
                <p style={{color : "rgba(30, 217, 30, 0.8)"}}>Rp. 500.000,</p>
            </div>
        </div>

        <div className="button" style={{width : "100%", display : "flex", justifyContent : "flex-end", textAlign : "center", marginTop : "30px"}}>
            <Button variant="dark" style={{display : 'flex', width : "50%", textAlign : "center"}}>Pay</Button>
        </div>
        
    </div>
  )
}

export default Right