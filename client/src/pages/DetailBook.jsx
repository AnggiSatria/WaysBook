import React from 'react'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import Card from "../components/detail book/Card"
import About from '../components/detail book/About'
import "../assets/css/bg.css"
import { useState } from 'react'
import { Modal } from "react-bootstrap"
import IMG from '../../src/assets/img/background.png'

function DetailBook() {

  document.body.style.backgroundImage = IMG;

  const [lgShow, setLgShow] = useState(false)

  return (
    <div>
      <div className="navbar">
        <CustomerNavbar/>
      </div>

        <div className="book" style={{minHeight : "93vh", marginLeft : "10%", marginRight : "10%"}}>
          <Card/>

          <div className="modal">
            <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            style={{}}
          >

              <Modal.Body style={{textAlign : "center", color : "rgba(65, 222, 40, 0.85)", background : "transparent"}}>This Product Is Sucessfully Added To Cart</Modal.Body>
            </Modal>
        </div>

          <About setLgShow={setLgShow}/>
        </div>
          
    </div>
  )
}

export default DetailBook