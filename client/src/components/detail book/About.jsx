import React from 'react'
import { Button } from 'react-bootstrap'

function About(props) {
  return (
    <div style={{marginLeft : "12%", marginLeft : "12%", marginTop : "50px", display : "flex", flexDirection : "column"}}>
        <h1>About This Book</h1>
        <p style={{wordWrap : "break-word"}}>{props.desc}</p>
    

        <div className="button" style={{display : "flex", width : "100%", justifyContent : "flex-end"}}>
          <Button variant='dark' style={{width : "15%"}} onClick={props.addCart}>Add To Cart</Button>  
        </div>
           
        <br />
    </div>
  )
}

export default About